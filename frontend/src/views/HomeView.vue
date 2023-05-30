<template>
  <div id="HomeView" class="w-full bg-white ml-2 rounded-t-xl h-full shadow-sm">
    <div class="border-b">
      <div class="flex items-center justify-between px-4 my-3">
        <IconComponent
            class="-m-2 -ml-2.5"
            iconString="trash"
            iconColor="#636363"
            iconSize="22"
            hoverColor="hover:bg-gray-300"
            text="Delete selected"
          />
          <h4 class="text-xs text-gray-500"> 1-50 of 153</h4>
      </div>
    </div>

    <!-- message rows -->
    <div>
      <MessageRow
        from="john.doe@gmail.com"
        subject="Test row 1 is not enough for today"
        body="This is the body text of the test row 1"
        time="May 29 9:11 pm"
      />
      <MessageRow
        from="john.doe@gmail.com"
        subject="Test row 1 is not enough for today"
        body="This is the body text of the test row 1"
        time="May 29 9:11 pm"
      />
      <MessageRow
        from="john.doe@gmail.com"
        subject="Test row 1 is not enough for today"
        body="This is the body text of the test row 1"
        time="May 29 9:11 pm"
      />
      <MessageRow
        from="john.doe@gmail.com"
        subject="Test row 1 is not enough for today"
        body="This is the body text of the test row 1"
        time="May 29 9:11 pm"
      />
      <MessageRow
        from="john.doe@gmail.com"
        subject="Test row 1 is not enough for today"
        body="This is the body text of the test row 1"
        time="May 29 9:11 pm"
      />
      <MessageRow
        from="john.doe@gmail.com"
        subject="Test row 1 is not enough for today"
        body="This is the body text of the test row 1"
        time="May 29 9:11 pm"
      />
      <MessageRow
        from="john.doe@gmail.com"
        subject="Test row 1 is not enough for today"
        body="This is the body text of the test row 1"
        time="May 29 9:11 pm"
      />
    </div>

  </div>
</template>


<script setup>
import IconComponent from '../components/IconComponent.vue';
import MessageRow from '../components/MessageRow.vue';
</script>

