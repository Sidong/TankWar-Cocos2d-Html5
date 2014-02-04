/*
 * @author: SiDong Huang
 * @time:Sat Jul 21 16:23:51 HKT 2012
 * @description: these are all the resources needed to support the tankwar game.
 *
 * File Type: jpg, png, tmx, plist
 *
 * Resources
 *   |
 *   |---- Menu Layer
 *   |
 *   |---- About Layer
 *   |
 *   |---- LevelSelected Layer
 *   |
 *   |---- Game Layer
 *   |       |
 *   |       |---- background
 *   |       |
 *   |       |---- map objects
 *   |       |
 *   |       |---- tank/bullet/explosion...
 *   |
 *   |---- WinOrLose Layer
 */


//music
var s_bgMusic01= "Resources/Music/back01";
var s_bgMusic02= "Resources/Music/back02";

//special effect music
var s_explodeEffect = "Resources/Music/explodeEffect";
var s_DestroyEffect = "Resources/Music/DestroyEffect";
var s_fireEffect = "Resources/Music/fireEffect";
var s_flyexplosion = "Resources/Music/flyexplosion";
var s_missile1= "Resources/Music/missile1";
var s_missile2= "Resources/Music/missile2";
var s_mouseclick= "Resources/Music/mouseclick";
var s_timerEffect= "Resources/Music/timerEffect";

// Menu Layer image
var s_loading ="Resources/tankmain.jpg";
var s_newgame="Resources/mBtn_bgd.png";
var s_tankM="Resources/tankM.png";
var s_tankTitle="Resources/title.png";
var s_tankOA="Resources/OandA.png";
var s_zhadan="Resources/zhadan.png";

// About Layer
var s_about="Resources/about.jpg";

// LevelSelected Layer
var s_backbt="Resources/backbt.png";
var s_levelbutton="Resources/levelbutton.png";
var s_levelbg="Resources/levelselectbg.png";
var s_leveltitle="Resources/leveltitle.png";
var s_sceneselect="Resources/sceneselect.png";
var s_loading1="Resources/tankmain1.jpg";

// Game Layer
/* --- map objects --- */
var s_qipan_qizi = "Resources/Tmx/qizi.png";
var s_normal_bullet = "Resources/normBullet.png";
var s_grassdaoju = "Resources/Tmx/grassdaoju.png";
var s_scenegrass01 = "Resources/scenegrass01.jpg";
var s_scenegrass02 = "Resources/scenegrass02.jpg";
var s_scenegrass03 = "Resources/scenegrass03.jpg";
var s_scenegrass04 = "Resources/scenegrass04.jpg";
var s_bomb = "Resources/bomb.png";
var s_timebomb = "Resources/timebomb.png";

/* --- tmx --- */
var s_qipanmap1 = "Resources/Tmx/qipan1.tmx";
var s_qipanmap2 = "Resources/Tmx/qipan2.tmx";
var s_qipanmap3 = "Resources/Tmx/qipan3.tmx";
var s_qipanmap4 = "Resources/Tmx/qipan4.tmx";
var s_qipanmap5 = "Resources/Tmx/qipan5.tmx";
var s_qipanmap6 = "Resources/Tmx/qipan6.tmx";
var s_qipanmap7 = "Resources/Tmx/qipan7.tmx";
var s_qipanmap8 = "Resources/Tmx/qipan8.tmx";
var s_grassmap1 = "Resources/Tmx/grass1.tmx";
var s_grassmap2 = "Resources/Tmx/grass2.tmx";
var s_grassmap3 = "Resources/Tmx/grass3.tmx";
var s_grassmap4 = "Resources/Tmx/grass4.tmx";
var s_grassmap5 = "Resources/Tmx/grass5.tmx";
var s_grassmap6 = "Resources/Tmx/grass6.tmx";
var s_grassmap7 = "Resources/Tmx/grass7.tmx";
var s_grassmap8 = "Resources/Tmx/grass8.tmx";
/* --- map objects --- */

/* --- tank image --- */
var s_tank1 = "Resources/tank1.png";
var s_tank2 = "Resources/tank2.png";
var s_tank3 = "Resources/tank3.png";
var s_tank4 = "Resources/tank4.png";
var s_tank5 = "Resources/tank5.png";
var s_tank6 = "Resources/tank6.png";
var s_tank7 = "Resources/tank7.png";
var s_tank8 = "Resources/tank8.png";
var s_missileTank = "Resources/missileTank.png";
var s_boss1 = "Resources/boss1.png";
var s_boss2 = "Resources/boss2.png";
/* --- tank image --- */
    
/* --- missile img --- */
var s_daodan = "Resources/daodan.png";
var s_daodan02 = "Resources/daodan02.png";
/* --- missile img --- */

/* --- explosion image and plist --- */
var s_hit = "Resources/hit.jpg";

var s_ice = "Resources/ice.png";

var s_HPreduce = "Resources/HPreduce.png";

var s_explosion = "Resources/explosion.png";
var s_explode1 = "Resources/explode1.jpg";
var s_explode2= "Resources/explode2.jpg";
var s_explode3 = "Resources/explode3.jpg";

var s_explosion_plist = "Resources/explosion.plist";
/* --- explosion --- */

/* --- background img --- */
var s_qipan = "Resources/qipan.jpg";
/* --- background --- */

/* --- hp/life/score/item/gamebegin/level img --- */
var s_daojulan = "Resources/daojulan.png";
var s_life = "Resources/life.png";
var s_lifeandhp = "Resources/lifeandhp.png";
var s_score = "Resources/score.png";
var s_hp_green = "Resources/hp_green.png";
var s_hp_red = "Resources/hp_red.png";
var s_daoju = "Resources/daoju.png";
var s_gamebegin = "Resources/gamebegin.png";
var s_level = "Resources/level.png";
var s_pausebg= "Resources/pausebg.png";
var s_pausebutton= "Resources/pausebutton.png";
/* --- hp/life/score/item/gamebegin/level img --- */

// WinOrLose Layer
var s_winorlose = "Resources/winorlose.png" ;
var s_winorloseBG = "Resources/winorloseBG.jpg";
var s_winorlosebutton = "Resources/winorlosebutton.png";

//tips
var s_tips1_1="Resources/tips/tips1-1.png";
var s_tips1_2="Resources/tips/tips1-2.png";
var s_tips1_3="Resources/tips/tips1-3.png";
var s_tips1_4="Resources/tips/tips1-4.png";
var s_tips1_5="Resources/tips/tips1-5.png";
var s_tips1_6="Resources/tips/tips1-6.png";
var s_tips1_8="Resources/tips/tips1-8.png";
var s_tips2_1="Resources/tips/tips2-1.png";
var s_tips2_3="Resources/tips/tips2-3.png";
var s_tips2_5="Resources/tips/tips2-5.png";
var s_tips2_7="Resources/tips/tips2-7.png";
var s_tips2_8="Resources/tips/tips2-8.png";

//LevelSelectLayer
var s_selectlevelbg="Resources/selectlevelbg.png";
var s_selectlevelbt="Resources/selectlevelbt.png";
var s_selectlevelbutton="Resources/selectlevelbutton.png";
var s_selectlevelbutton02="Resources/selectlevelbutton02.png";
var s_selectlevelunderbg="Resources/selectlevelunderbg.jpg";

// font
//var s_font_num = "Resources/GiddyupStd.fnt";
var s_font_num = "Resources/font.fnt";
var s_font_png = "Resources/font.png";
    
var g_ressources = [
//image
{   type:"image", src:s_loading   },
{   type:"image", src:s_newgame   },
{   type:"image", src:s_tankM   },
{   type:"image", src:s_tankTitle   },
{   type:"image", src:s_tankOA   },
{   type:"image", src:s_zhadan   },
{   type:"image", src:s_qipan_qizi   },
{   type:"image", src:s_qipan   },
{   type:"image", src:s_scenegrass01   },
{   type:"image", src:s_scenegrass02    },
{   type:"image", src:s_scenegrass03    },
{   type:"image", src:s_scenegrass04    },
{   type:"image", src:s_grassdaoju  },
{   type:"image", src:s_about   },
{   type:"image", src:s_backbt  },
{   type:"image", src:s_selectlevelbutton},
{   type:"image", src:s_levelbg   },
{   type:"image", src:s_leveltitle   },
{   type:"image", src:s_sceneselect   },
{   type:"image", src:s_loading1   },
{   type:"image", src:s_normal_bullet   },
{   type:"image", src:s_tank1   },
{   type:"image", src:s_tank2   },
{   type:"image", src:s_tank3   },
{   type:"image", src:s_tank4   },
{   type:"image", src:s_tank5   },
{   type:"image", src:s_tank6   },
{   type:"image", src:s_tank7   },
{   type:"image", src:s_tank8   },
{   type:"image", src:s_boss1   },
{   type:"image", src:s_boss2   },
{   type:"image", src:s_missileTank   },
{   type:"image", src:s_daodan   },
{   type:"image", src:s_daodan02   },
{   type:"image", src:s_bomb   },
{   type:"image", src:s_timebomb    },
{   type:"image", src:s_hit   },
{   type:"image", src:s_ice   },
{   type:"image", src:s_HPreduce   },
{   type:"image", src:s_explosion   },
{   type:"image", src:s_explode1   },
{   type:"image", src:s_explode2   },
{   type:"image", src:s_explode3   },
{   type:"image", src:s_daojulan   },
{   type:"image", src:s_lifeandhp   },
{   type:"image", src:s_life   },
{   type:"image", src:s_hp_green   },
{   type:"image", src:s_hp_red   },
{   type:"image", src:s_daoju   },
{   type:"image", src:s_gamebegin   },
{   type:"image", src:s_pausebg   },
{   type:"image", src:s_pausebutton   },
{   type:"image", src:s_level   },
{   type:"image", src:s_winorlose   },
{   type:"image", src:s_winorloseBG   },
{   type:"image", src:s_winorlosebutton   },
{   type:"image", src:s_selectlevelbutton   },
{   type:"image", src:s_selectlevelbutton02   },
{   type:"image", src:s_selectlevelbt   },
{   type:"image", src:s_selectlevelbg   },
{   type:"image", src:s_selectlevelunderbg   },
{   type:"image", src:s_tips1_1   },
{   type:"image", src:s_tips1_2   },
{   type:"image", src:s_tips1_3   },
{   type:"image", src:s_tips1_4   },
{   type:"image", src:s_tips1_5   },
{   type:"image", src:s_tips1_6   },
{   type:"image", src:s_tips1_8   },
{   type:"image", src:s_tips2_1   },
{   type:"image", src:s_tips2_3   },
{   type:"image", src:s_tips2_5   },
{   type:"image", src:s_tips2_7   },
{   type:"image", src:s_tips2_8   },
            
//tmx
{   type:"tmx", src:s_qipanmap1   },
{   type:"tmx", src:s_qipanmap2   },
{   type:"tmx", src:s_qipanmap3   },
{   type:"tmx", src:s_qipanmap4   },
{   type:"tmx", src:s_qipanmap5   },
{   type:"tmx", src:s_qipanmap6   },
{   type:"tmx", src:s_qipanmap7   },
{   type:"tmx", src:s_qipanmap8   },
{   type:"tmx", src:s_grassmap1   },
{   type:"tmx", src:s_grassmap2   },
{   type:"tmx", src:s_grassmap3   },
{   type:"tmx", src:s_grassmap4   },
{   type:"tmx", src:s_grassmap5   },
{   type:"tmx", src:s_grassmap6   },
{   type:"tmx", src:s_grassmap7   },
{   type:"tmx", src:s_grassmap8   },

// plist
{   type:"plist", src:s_explosion_plist   },

// font
{   type:"fnt", src:s_font_num   },
{   type:"image", src:s_font_png   },

//music
{   type:"bgm", src:s_bgMusic01   },
{   type:"bgm", src:s_bgMusic02   },
    
//effect
{   type:"effect", src:s_explodeEffect   },
{   type:"effect", src:s_DestroyEffect   },
{   type:"effect", src:s_fireEffect   },
{   type:"effect", src:s_flyexplosion   },
{   type:"effect", src:s_missile1   },
{   type:"effect", src:s_missile2   },
{   type:"effect", src:s_mouseclick   },
{   type:"effect", src:s_timerEffect   }

] 