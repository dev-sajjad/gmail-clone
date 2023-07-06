<template>
    <div id="MessageRow">
        <div :class="[hasViewed ? '' : 'bg-gray-100 border-b-2']" class="border-b hover:border-b-0 hover:border hover:border-gray-200 hover:shadow-md cursor-pointer" >
            <div class="flex items-center justify-between">
              <div class="flex items-center px-4 py-2">
                    <component 
                     @click="isSelected = !isSelected"
                     :is="isSelected ? CheckboxMarkedIcon : CheckboxBlankOutlineIcon"
                     :size="22" 
                     fillColor="#636363" />
                    <StarOutlineIcon :size="22" fillColor="#636363"  class="ml-4"/>
              </div> 
              <div class="flex items-center w-full">
                <RouterLink :to="`email/message/${id}`">
                    <div class="flex items-center w-full">
                        <h2 class="ml-4 text-sm font-semibold w-[170px] truncate">
                            {{ from }}
                        </h2>
                        <div class="flex items-center justify-between">
                            <p class="text-sm mr-1.5 font-semibold max-w-[200px] truncate "> {{ subject }}</p>
                            <p class="text-sm text-gray-500 font-semibold max-w-[400px] truncate "> - {{ body }}...</p>
                        </div>
                    </div>
                </RouterLink>
              </div>

              <div class="text-right truncate mr-4 w-full">
                {{ time }}
              </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, toRefs, watch } from "vue";

import CheckboxBlankOutlineIcon from "vue-material-design-icons/CheckboxBlankOutline.vue";
import StarOutlineIcon from "vue-material-design-icons/StarOutline.vue";
import CheckboxMarkedIcon from "vue-material-design-icons/CheckboxMarked.vue";

const props = defineProps({
    id: String,
    from: String,
    subject: String,
    body: String,
    time: String,
    hasViewed: Boolean,
     
})

const emit = defineEmits(['selectedId']);

let isSelected = ref(false);

const { id, from, subject, body, time, hasViewed } = toRefs(props);

watch(isSelected, (bool) => {
    emit('selectedId', {id: id.value, bool: bool})
})

</script>
