<template>
    <div>
        <Switch
            v-model="enabled"
            :class="enabled ? 'bg-teal-900' : ' bg-gray-300'"
            class="relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-transparent"
        >
            <span class="sr-only">Enable notifications</span>
            <span :class="enabled ? 'translate-x-5.5 ' : 'translate-x-0.5'" class="inline-block w-5 h-5 transform bg-white rounded-full transition duration-200 ease-in-out text-teal-600" > 
                <SunIcon v-if="!enabled" class="w-4 h-4 mx-auto my-0.5"/> 
                <MoonIcon v-else  class="w-4 h-4 mx-auto my-0.5"/>
            </span>
        </Switch>
    </div>
</template>

<script>
import { ref, watch } from 'vue';

import { Switch } from '@headlessui/vue';
import { SunIcon, MoonIcon } from "@heroicons/vue/outline"

import themeSet from '../compositions/theme';

export default {
    name: 'Theme Toggler',
    components : { Switch, SunIcon, MoonIcon },
    setup () {
        const { initTheme, theme_color, setTheme } = themeSet();
        initTheme();

        const enabled = ref(false);

        if (theme_color.value == 'dark') {
            enabled.value = true;
        }

        watch(enabled, (currentValue) => {
            if(currentValue){
                setTheme('dark')
            } else {
                setTheme('light')
            }
        });

        return { enabled, theme_color };
    }
}
</script>