import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#000000",
                secondary: "#484848",
                gray: "#8D8D8D",
                white: "#FFFFFF",
                background: "#EFEFEF"
            }
        }
    }
});
