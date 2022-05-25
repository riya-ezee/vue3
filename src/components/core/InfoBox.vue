<template>
  <div class="flex flex-col w-full border-2 rounded m-4 flex-wrap">
    <slot name="header"></slot>
    <div class="flex justify-between px-4 py-4">
        <slot name="body"></slot>
    </div>
  </div>
</template>

