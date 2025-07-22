import '../styles/_index.scss'

import { resumeData } from './config/resumeData.js';
import { setEditableListener } from './utils/editable.js'
import { initSavePDFButton } from './utils/pdf-export.js'
import { drawMenu } from './components/menu'
import { drawProfileSection } from './components/profile'
import { drawNameSection } from './components/name'
import { drawLanguagesSection } from './components/languages'
import { drawExperienceSection } from './components/experience'
import { drawToolsSection } from './components/tools'
import { drawEducationSection } from './components/education'
import { drawInterestsSection } from './components/interests'
import { drawContactSection } from './components/contact'

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#menu').innerHTML = drawMenu()

  document.querySelector('#app').innerHTML = [
    drawProfileSection(resumeData.profile),
    drawNameSection(resumeData.name),
    drawLanguagesSection(resumeData.languages),
    drawExperienceSection(resumeData.experience),
    drawToolsSection(resumeData.tools),
    drawEducationSection(resumeData.education),
    drawInterestsSection(resumeData.interests),
    drawContactSection(resumeData.contact),
  ].join('')

  setEditableListener()
  initSavePDFButton('#save-pdf')
})
