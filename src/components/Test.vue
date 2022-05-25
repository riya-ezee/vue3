<template>
<div>
    <div class="bg-black">ghfrge</div>
    <div class="bg-red-300">ghfrge</div>
    
    <div class="bg-red-300 w-1/3">Text</div>

    <!-- margin and padding -->
    <div class="bg-red-100 w-32 h-32 my-2">Text1</div>
    <div class="bg-red-300 w-32 h-32">Text2</div>

    <!-- styling text font family -->
    <p>font type1</p>
    <p class="font-sans">font type1</p>
    <p class="font-serif">font type2</p>
    <p class="font-mono">font type3</p>

    <!-- styling text and text size -->
    <div class="text-xs">Very small font size</div>
    <div class="text-sm"> Text Size</div>
    <div class="text-base"> Text Size</div>
    <div class="text-lg"> Text Size</div>
    <div class="text-xl"> Text Size</div>
    <div class="text-2xl"> Text Size</div>
    <div class="text-6xl"> Text Size</div>

    <!-- text alignment text color --> 
    <div class="text-justify text-blue-300"> I started using @tailwindcss. I instantly fell in love with their responsive modifiers, thorough documentation, and how easy it was customizing color palettes.I started using @tailwindcss. I instantly fell in love with their responsive modifiers, thorough documentation, and how easy it was customizing color palettes.</div>
    <div class="text-left text-red-200"> Text left</div>
    <div class="text-center"> Text center</div>
    <div class="text-right"> Text right</div>

    <!-- styling text italic and text weight -->
    <P class="italic"> I started using @tailwindcss. <span class="not-italic font-bold">I instantly fell in love with their responsive modifiers, </span> thorough documentation, and how easy it was customizing color palettes.I started using @tailwindcss. I instantly fell in love with their responsive modifiers, thorough documentation, and how easy it was customizing color palettes.</P>
     <!-- Letter Spacing -->
    <P class="italic tracking-tight"> I started using @tailwindcss. I instantly fell in love with their responsive modifiers, thorough documentation, and how easy it was customizing color palettes.I started using @tailwindcss. I instantly fell in love with their responsive modifiers, thorough documentation, and how easy it was customizing color palettes.</P>
    <!-- Line Height -->
    <P class="leading-loose"> I started using @tailwindcss. I instantly fell in love with their responsive modifiers, thorough documentation, and how easy it was customizing color palettes.I started using @tailwindcss. I instantly fell in love with their responsive modifiers, thorough documentation, and how easy it was customizing color palettes.</P>
    <!-- Text decoration and trsformation -->
    <P class="line-through"> Text</P>
    <P class="underline"> Text</P>
    <P class="uppercase"> Text transform uppercase letter</P>
    <P class="lowercase"> Text transform lowercase letter</P>
    <P class="capitalize"> Text transform capitalize letter</P>
    <P class="normal-case"> Text transform capitalize letter</P>

    <span>=======================================================================================================================================================================================</span>
    <div class="w-32 h-32 border-8 border-double border-blue-800 rounded-tr-full"></div>
    <span>=======================================================================================================================================================================================</span>
    <!-- Display Mode -->
    <div class="text-left">Hello <div class="bg-yellow-200 w-20 inline">World</div></div>
    <div class="h-screen flex justify-center items-center flex-no-wrap">
        <div class="bg-yellow-200 w-48 h-20 py-8">1</div>
        <div class="bg-blue-200 w-48 h-20 py-8">2</div>
        <div class="hover:bg-red-500 bg-red-200 w-48 h-20 py-8">3</div>
    </div>
    <span>=======================================================================================================================================================================================</span>
     <!--Hover Modifier -->
     <button class="bg-red-200 hover:bg-red-500 p-2 border">Hover</button>
     
     <!--Hover Modifier -->
     <button class="cursor-not-allowed bg-red-200 p-2 border">Hover</button>
     <div class="select-all">select</div>
     <span>=======================================================================================================================================================================================</span>
</div>
</template>