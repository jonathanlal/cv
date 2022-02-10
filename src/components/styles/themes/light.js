import siteConfig from '../../../../data/siteConfig'
import mountains from '../../../assets/light-mountains.svg'

export default {
  colors: {
    background: siteConfig.background_color,
    primary: siteConfig.theme_color,
    skill: '#7b91bf',
    fontColor: siteConfig.fontColor,
    navbar: '#14171A',
    linkHover: '#1DA1F2',
    sky: "linear-gradient(to bottom, #82addb 0%,#ebb2b1 100%);",
    // fontTitle: "'Shadows Into Light', cursive",
  },
  bg:{
    bgColor: '#E1E8ED',
   // bgImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1600 900\'%3E%3Cpolygon fill=\'%23e4b1b1\' points=\'957 450 539 900 1396 900\'/%3E%3Cpolygon fill=\'%237e9cbd\' points=\'957 450 872.9 900 1396 900\'/%3E%3Cpolygon fill=\'%23c7bfc1\' points=\'-60 900 398 662 816 900\'/%3E%3Cpolygon fill=\'%237a88a3\' points=\'337 900 398 662 816 900\'/%3E%3Cpolygon fill=\'%23e7dfe5\' points=\'1203 546 1552 900 876 900\'/%3E%3Cpolygon fill=\'%23cbc9d8\' points=\'1203 546 1552 900 1162 900\'/%3E%3Cpolygon fill=\'%23b4b1c9\' points=\'641 695 886 900 367 900\'/%3E%3Cpolygon fill=\'%23d7d3d6\' points=\'587 900 641 695 886 900\'/%3E%3Cpolygon fill=\'%23a0aac1\' points=\'1710 900 1401 632 1096 900\'/%3E%3Cpolygon fill=\'%23bca8ac\' points=\'1710 900 1401 632 1365 900\'/%3E%3Cpolygon fill=\'%23535e6c\' points=\'1210 900 971 687 725 900\'/%3E%3Cpolygon fill=\'%23fcf3f3\' points=\'943 900 1210 900 971 687\'/%3E%3C/svg%3E");',
    bgImage: mountains,
  }
}
