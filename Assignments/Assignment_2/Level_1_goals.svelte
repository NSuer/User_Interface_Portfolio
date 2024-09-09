<script>

  import { DailyEntry } from '../stores.js';
  import { dailyEntries } from '../stores.js';
  import { userData } from '../stores.js';
  import { FeelingActivity, ImageActivity, PrayerActivity, JournalActivity, ReflectionActivity,SilentContemplationActivity } from '../stores.js';

  let name = $userData.name;
  let date = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();

  let NewDailyEntry = new DailyEntry();

  let daysActive = $userData.daysActive
  let successMessage = "";

  // Days using is the amount of days since the user started using the interface
  function getDaysUsing() {
    let startDate = new Date($userData.startDate);
    let currentDate = new Date();
    let timeDifference = currentDate.getTime() - startDate.getTime();
    let daysUsing = timeDifference / (1000 * 3600 * 24);
    return Math.floor(daysUsing);
  }
  let daysUsing = getDaysUsing();

  function saveEntry() {
    // Update the NewDailyEntry object with the date, time, and current values of the temporary activities
    NewDailyEntry = {
      date: date,
      time: time,
      feelingActivity: tempFeelingActivity,
      imageActivity: tempImageActivity,
      prayerActivity: tempPrayerActivity,
      journalActivity: tempJournalActivity,
      reflectionActivity: tempReflectionActivity,
      silentContemplationActivity: tempSilentContemplationActivity
    };


    dailyEntries.update(entries => {
      entries.push(NewDailyEntry);
      return entries;
    });
    userData.update(user => {
      user.daysActive += 1;
      return user;
    });
    successMessage = "Entries saved successfully!";
  }

  let tempFeelingActivity = new FeelingActivity();
  let tempImageActivity = new ImageActivity();
  let tempPrayerActivity = new PrayerActivity();
  let tempJournalActivity = new JournalActivity();
  let tempReflectionActivity = new ReflectionActivity();
  let tempSilentContemplationActivity = new SilentContemplationActivity();

  function handleFeelingChange(index) {
    let option = tempFeelingActivity.options[index];
    if (tempFeelingActivity.selected.includes(option)) {
      tempFeelingActivity.selected = tempFeelingActivity.selected.filter(selectedOption => selectedOption !== option);
    } else {
      tempFeelingActivity.selected.push(option);
    }
  }

  function handleImageUpload(event) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = () => {
      tempImageActivity.image = reader.result;
    };
    reader.readAsDataURL(file);
  }



  



</script>
  
<main>

  <!-- Religious/spiritual (Daily faith or spiritual practices)-->

  <!-- For this first set of implementation goals, create a basic and minimally interactive interface, 
  that shows a snapshot of a mock user's journaling or interface for one day.  -->
  <!-- 1.  A section of your page should include overview information about your user and the current date/time. 

    Their name
    The current date/time
    How long they have used the interface and how much they have used the interface (X days since beginning, Y days active) -->  
  
  <div class="container">
    <!-- User Overview Section -->
    <div class="section">
      <h2>User Overview</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Current Date/Time:</strong> {date} {time}</p>
      <p><strong>Days Since Beginning:</strong> {daysUsing}</p>
      <p><strong>Active Days:</strong> {daysActive}</p>
    </div>
  
    <!-- Activity Tracking Section -->
    <div class="section">
      <h1>Track Your Activities</h1>
  
      <!-- Feelings -->
      <div>
        <h2>{tempFeelingActivity.type}</h2>
        <h3>{tempFeelingActivity.description}</h3>
        {#each tempFeelingActivity.options as option, index}
          <label>
            <input type="checkbox" checked={tempFeelingActivity.selected.includes(option)} on:change={() => handleFeelingChange(index)} />
            {option}
          </label>
        {/each}
      </div>
  
      <!-- Image Upload -->
      <div>
        <h2>{tempImageActivity.type}</h2>
        <h3>{tempImageActivity.description}</h3>
        <input type="file" accept="image/*" on:change={handleImageUpload} />
        {#if tempImageActivity.image}
          <div>
            <img src={tempImageActivity.image} alt="Uploaded" style="max-width: 200px; max-height: 200px;" />
            <textarea placeholder="Write a caption..." bind:value={tempImageActivity.caption}></textarea>
          </div>
        {/if}
      </div>
  
      <!-- Prayer -->
      <div>
        <h2>{tempPrayerActivity.type}</h2>
        <h3>{tempPrayerActivity.description}</h3>
        <label>
          <input type="checkbox" bind:checked={tempPrayerActivity.boolPrayed} />
          Did you pray today?
        </label>
      </div>
  
      <!-- Journal -->
      <div>
        <h2>{tempJournalActivity.type}</h2>
        <h3>{tempJournalActivity.description}</h3>
        <textarea placeholder="Write about your day and spiritual journey..." bind:value={tempJournalActivity.text}></textarea>
      </div>
  
      <!-- Reflection -->
      <div>
        <h2>{tempReflectionActivity.type}</h2>
        <h3>{tempReflectionActivity.description}</h3>
        <input type="text" placeholder="Write the verse or passage..." bind:value={tempReflectionActivity.verse} />
        <textarea placeholder="Write your thoughts..." bind:value={tempReflectionActivity.text}></textarea>
      </div>
  
      <!-- Silent Contemplation -->
      <div>
        <h2>{tempSilentContemplationActivity.type}</h2>
        <h3>{tempSilentContemplationActivity.description}</h3>
        <textarea placeholder="Write your thoughts after silent contemplation..." bind:value={tempSilentContemplationActivity.text}></textarea>
      </div>
    </div>
  
    <!-- Save Button -->
    <div class="section">
      <button on:click={saveEntry}>Save Entries</button>
      {#if successMessage}
        <p class="success-message">{successMessage}</p>
      {/if}
    </div>
  </div>

  <!-- 2. This interface should include the ability to track or log or record at least 6 different activities.  You can do more, if you choose

    One activity means:  Tracking feelings for the day, by selecting from 12 options (12 checkboxes).  
    One activity means: Uploading an image and writing a caption about the image.  
    One activity means: Checking off whether you did yoga, and recording for how long.  
    These activities should include at least 4 different kinds of entries- 
    e.g., long text, short text, check boxes, entering a number, selecting from a range, 
    choosing from a list of options, uploading an image...  This means don't have all 6 activities involve writing free text- Diversify.  -->

  <!-- 3. There should be some way for the user to save or submit their entries for the day.  
  Provide visual feedback to indicate that user has successfully saved their entries.   -->

  <!-- 4. Consider your interviews- did the participants identify particular needs for entering data into their log? 
  You can choose to address these here, if feasible. -->

  <div class="container">

  </div>


</main>
  
<style>
  .container {
    padding: 20px;
    max-width: 800px;
    margin: auto;
  }
  .section {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  .success-message {
    color: green;
    font-weight: bold;
  }
</style>

