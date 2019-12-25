import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        login: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        zipCode: '',
        birthDay: '',
        country: '',
        city: '',
        countries: [
            'Russia',
            'Italy'
        ],
        country: '',
        cities: {
            Russia: ['Moscow', 'Tomsk', 'Novosibirsk', 'Kazan', 'Omsk', 'St. Petersburg', 'Novorossiysk'],
            Italy: ['Rome', 'Milan', 'Naples', 'Venice', '	Florence', 'Palermo', 'Genoa']
        }
    },
    mutations: {
        changeCountry(state, payload) {
            state.country = payload
        },
        changeCity(state, payload) {
            state.city = payload
        }
    }
}
)