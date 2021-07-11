import React from 'react'
import './Sidebar.css'
import SidebarB from './SidebarB'
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import RestoreIcon from '@material-ui/icons/Restore';
import { Avatar } from '@material-ui/core';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';
import AdjustIcon from '@material-ui/icons/Adjust';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import BlurCircularIcon from '@material-ui/icons/BlurCircular';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import YouTubeIcon from '@material-ui/icons/YouTube';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarB icon={<HomeIcon/>} title="Ana Sayfa"/>
            <SidebarB icon={<ExploreIcon/>} title="Keşfet"/>
            <SidebarB icon={<SubscriptionsIcon/>} title="Abonelikler"/>
            <hr style={{}}/>
            <SidebarB icon={<CollectionsBookmarkIcon/>} title="Kitaplık"/>
            <SidebarB icon={<RestoreIcon/>} title="Geçmiş"/>
            <hr style={{}}/>
            <p>Videoları beğenmek, yorum yapmak ve abone olmak için oturum açın</p>
            <button className="btn">
                    <Avatar/> <span>Oturum Aç</span>
                </button>
            <hr style={{}}/>
             <p style={{fontWeight:'bold',color:'gray',fontSize:14}}>YOUTUBE'UN EN İYİLERİ</p>
             <SidebarB icon={<PlayCircleFilledIcon/>} title="Müzik"/>
            <SidebarB icon={<SportsBaseballIcon/>} title="Spor"/>
            <SidebarB icon={<BlurCircularIcon/>} title="Oyun"/>
            <SidebarB icon={<AccessTimeIcon/>} title="Haberler"/>
            <SidebarB icon={<ExploreIcon/>} title="Canlı"/>
            <SidebarB icon={<AdjustIcon/>} title="360 Video"/>
            <hr style={{}}/>
            <SidebarB icon={<AddCircleIcon/>} title="Kanallara Göz At"/>
            <hr style={{}}/>
            <p style={{fontWeight:'bold',color:'gray',fontSize:14}}>YOUTUBE'DAN DAHA FAZLA İÇERİK</p>
            <SidebarB icon={<YouTubeIcon/>} title="Youtube Premium"/>
            <SidebarB icon={<RecordVoiceOverIcon/>} title="Canlı"/>
            <hr style={{}}/>
            <SidebarB icon={<SettingsIcon/>} title="Ayarlar"/>
            <SidebarB icon={<FlagIcon/>} title="İçerik bildirme geçmi..."/>
            <SidebarB icon={<HelpIcon/>} title="Yardım"/>
            <SidebarB icon={<FeedbackIcon/>} title="Geri bildirim gönder"/>
            <hr style={{}}/>
            <p style={{fontWeight:'bold',color:'gray',fontSize:13,lineHeight:2}}>Hakkında Basın Telif hakkı Bize ulaşın İçerik Üreticiler Reklam verme Geliştiriciler
Şartlar Gizlilik Politika ve Güvenlik YouTube Nasıl Çalışıyor? Yeni özellikleri deneyin</p>
<p style={{color:'gray',fontSize:13,lineHeight:2,opacity:0.7}}>
    @2021 Google LLC
</p>
        </div>
    )
}

export default Sidebar
