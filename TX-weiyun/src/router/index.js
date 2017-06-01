import Vue from 'vue'
import Router from 'vue-router'
import Recent from '@/pages/Recent'
import All from '@/pages/All'
import Doc from '@/pages/Doc'
import Pic from '@/pages/Pic'
import Video from '@/pages/Video'
import Note from '@/pages/Note'
import Music from '@/pages/Music'
import Time from '@/pages/Time'
import Safebox from '@/pages/Safebox'
import Share from '@/pages/Share'
import Trash from '@/pages/Trash'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: All
    },
    {
      path: '/recent',
      component: Recent
    },
    {
      path: '/doc',
      component: Doc
    },
    {
      path: '/pic',
      component: Pic
    },
    {
      path: '/video',
      component: Video
    },
    {
      path: '/note',
      component: Note
    },
    {
      path: '/music',
      component: Music
    },
    {
      path: '/time',
      component: Time
    },
    {
      path: '/safebox',
      component: Safebox
    },
    {
      path: '/share',
      component: Share
    },
    {
      path: '/trash',
      component: Trash
    }
  ]
})
