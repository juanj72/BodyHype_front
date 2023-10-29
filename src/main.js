

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css';

// Importa Bootstrap JavaScript (opcional)
import 'bootstrap/dist/js/bootstrap.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faListCheck,faWeightHanging,faFloppyDisk,faLocationDot,faCircleQuestion,faPuzzlePiece,faPencil,faDiagramProject,faBuildingColumns,faArrowRightFromBracket,faAddressBook,faClipboardQuestion,faDownload,faMagnifyingGlass,faEye,faChartColumn,faChartArea,faFileExcel,faFileCsv,faHatWizard,faHouse,faCalendarCheck,faFileExport,faUsers,faChartLine,faBriefcase,faHourglassHalf,faFilePdf, faBellConcierge, faUser, faPeopleRoof, faDumbbell, faRepeat, faCommentDollar, faCommentsDollar, faGlobe } from '@fortawesome/free-solid-svg-icons'
import {faPenToSquare} from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faLocationDot,faCircleQuestion,faPuzzlePiece,faDiagramProject,faBuildingColumns,faDownload,faMagnifyingGlass,faHatWizard,faEye,faArrowRightFromBracket,faRepeat)
library.add(faListCheck,faClipboardQuestion,faHouse,faGlobe,faPencil,faFloppyDisk,faWeightHanging)
library.add(faAddressBook,faCalendarCheck,faCommentsDollar,faArrowRightFromBracket,faPenToSquare)
library.add(faChartColumn,faChartArea,faFileExcel,faFileCsv,faFileExport,faUsers,faChartLine,faBriefcase,faHourglassHalf,faFilePdf,faBellConcierge,faUser,faPeopleRoof,faDumbbell)









const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)



app.use(router)

app.mount('#app')
