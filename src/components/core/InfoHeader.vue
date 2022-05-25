<template>
    <div class="border-b w-full px-4 py-2 bg-gray-200">
      <span><slot name="title"></slot> </span>
      <span class="text-xs"> ( </span> 
      <slot name="price"></slot> 
      <slot name="qty"></slot>
      <span class="text-xs"> )</span>
    </div>
</template>