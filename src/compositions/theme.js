import { ref } from "vue";
import { useStore } from 'vuex'

export default function() {
    const theme_color = ref('');
    const store = useStore()

    const initTheme = () => {
        const cachedTheme = localStorage.theme ? localStorage.theme : false;
        const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (cachedTheme) {
            setTheme(cachedTheme);
        } else if (userPrefersDark) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    const setTheme = (theme) => {
        console.log(theme)

        if (theme == 'dark') {
            document.querySelector('html').classList.add('dark')
        } else {
            document.querySelector('html').classList.remove('dark')
        }

        store.commit('ThemeModule/setTheme', theme)

        localStorage.theme = theme
        theme_color.value = theme


    }

    return { initTheme, theme_color, setTheme }
}