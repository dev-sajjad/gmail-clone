<template>
  <div class="w-full bg-white ml-2 rounded-t-xl h-full shadow-sm">
    <div class="border-b">
      <div class="flex items-center justify-between px-4 my-3">
        <div class="flex">
          <RouterLink to="/email">
          <IconComponent
            iconString="back"
            iconColor="#636363"
            iconSize="22"
            hoverColor="hover:bg-gray-300"
            text="Back to inbox"
          />
        </RouterLink>
        <IconComponent
            class="ml-3"
            iconString="trash"
            iconColor="#636363"
            iconSize="22"
            hoverColor="hover:bg-gray-300"
            text="Delete"
          />
        </div>
        <div class="text-xs text-gray-500">1-50 of 153</div>
      </div>
    </div>

  <div class="overflow-x-hidden h-[656px] overscroll-y-auto">
    <h3 class="w-full text-xl ml-20 font-light pt-5">Subject</h3>

    <div class="w-full flex">
      <img class="rounded-full mt-8 mx-5 w-10 h-10" src="https://via.placeholder.com/45" alt="user img">
      <div class="w-full my-4 mx-0.5">
        <div class="font-semibold text-sm mt-4 mb-4">
          <div class="w-full flex justify-between items-center">
            <h4>john.doe@gmail.com</h4>
            <p>May 29 9:11 pm</p>
          </div>
          <span class="text-xs font-normal text-gray-500">to me</span>
        </div>
        <p class="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto amet assumenda ea odio illum asperiores tempore recusandae et atque! Sed quidem fuga cumque dolores voluptatibus ratione, sint, totam, ipsa magnam eveniet ex cum error pariatur molestias sit a esse libero perferendis autem aperiam veritatis. Pariatur voluptas laudantium sit qui ab praesentium vel sint, placeat veniam rerum asperiores explicabo omnis? Voluptas eum incidunt perferendis maxime alias hic sequi perspiciatis nesciunt iure labore nulla voluptate doloremque, impedit, dicta aspernatur harum vero in, accusamus iste neque aut nisi. Id magnam veritatis nihil nesciunt dolorem cumque? Accusantium, animi. Ut ullam odio laudantium iusto vero, illo accusantium doloribus error optio ab cumque vitae architecto consectetur sint quia non quibusdam et, ratione, tenetur voluptatem aliquam? Quasi, modi obcaecati? Esse quod alias eaque perspiciatis laboriosam, assumenda animi fugit rerum omnis eos, aliquid, perferendis praesentium vero commodi quia fuga rem. Corrupti, asperiores eos eveniet molestias cumque facilis soluta laborum minus dicta voluptate sit quis alias nam laudantium error enim sunt perspiciatis consequatur at dignissimos dolorum deleniti vero. Magnam possimus quia incidunt deserunt tenetur optio dolorum voluptate nihil! Ab dicta labore velit. Consequatur totam quas accusantium voluptatem et non modi! Quisquam ratione quasi dignissimos facere nihil eum. Nostrum quisquam dolore corrupti omnis,odio illum asperiores tempore recusandae et atque! Sed quidem fuga cumque dolores voluptatibus ratione, sint, totam, ipsa magnam eveniet ex cum error pariatur molestias sit a esse libero perferendis autem aperiam veritatis. Pariatur voluptas laudantium sit qui ab praesentium vel sint, placeat veniam rerum asperiores explicabo omnis? Voluptas eum incidunt perferendis maxime alias hic sequi perspiciatis nesciunt iure labore nulla voluptate doloremque, impedit, dicta aspernatur harum vero in, accusamus iste neque aut nisi. Id magnam veritatis nihil nesciunt dolorem cumque? Accusantium, animi. Ut ullam odio laudantium iusto vero, illo accusantium doloribus error optio ab cumque vitae architecto consectetur sint quia non quibusdam et, ratione, tenetur voluptatem aliquam? Quasi, modi obcaecati? Esse quod alias eaque perspiciatis laboriosam, assumenda animi fugit rerum omnis eos, aliquid, perferendis praesentium vero commodi quia fuga rem. Corrupti, asperiores eos eveniet molestias cumque facilis soluta laborum minus dicta voluptate sit quis alias nam laudantium error enim sunt perspiciatis consequatur at dignissimos dolorum deleniti vero. Magnam possimus quia incidunt deserunt tenetur optio dolorum voluptate nihil! Ab dicta labore velit. Consequatur totam quas accusantium voluptatem et non modi! Quisquam ratione quasi dignissimos facere nihil eum. Nostrum quisquam dolore corrupti omnis odio illum asperiores tempore recusandae et atque! Sed quidem fuga cumque dolores voluptatibus ratione, sint, totam, ipsa magnam eveniet ex cum error pariatur molestias sit a esse libero perferendis autem aperiam veritatis. Pariatur voluptas laudantium sit qui ab praesentium vel sint, placeat veniam rerum asperiores explicabo omnis? Voluptas eum incidunt perferendis maxime alias hic sequi perspiciatis nesciunt iure labore nulla voluptate doloremque, impedit, dicta aspernatur harum vero in, accusamus iste neque aut nisi. Id magnam veritatis nihil nesciunt dolorem cumque? Accusantium, animi. Ut ullam odio laudantium iusto vero, illo accusantium doloribus error optio ab cumque vitae architecto consectetur sint quia non quibusdam et, ratione, tenetur voluptatem aliquam? Quasi, modi obcaecati? Esse quod alias eaque perspiciatis laboriosam, assumenda animi fugit rerum omnis</p>
      </div>
    </div>
  </div>

  </div>
</template>

<script setup>
import IconComponent from "../components/IconComponent.vue";
</script>
