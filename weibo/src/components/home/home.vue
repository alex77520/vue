<template>
<div class="main-wrap">
	<div class="lite-topbar main-top">
		<!-- top -->
		<div class="nav-top">
		    <div class="nav-left unlogin-logo"></div>
		    <a class="nav-search unlogin-search">
		        <aside>
		            <label class="m-search">
		                <i class="m-font m-font-search"></i>
		                <div class="m-text-cut"> 大家都在搜：霉霉演唱会 面部识别</div>
		            </label>
		        </aside>
		    </a>
		    <div class="nav-right">
		        <div class="lite-iconf lite-iconf-releas"></div>
		    </div>
		</div>

		<!-- nav -->
		<div class="nav-main">
		    <div class="m-box">
		        <div class="m-box-col inner-box">
		            <div class="scroll-box slide-container">
		                <div class="slide-wrap">
		                    <ul class="nav_item">
		                        <li class="item_li" v-for="(nav,index) in navlist" :data-guid="nav.gid" @click="navSwitch(index)" :class="{cur:page==index}">
		                             <span>{{nav.name}}<em></em></span>
		                        </li>
		                    </ul>
		                </div>
		            </div>
		        </div>
		        <div class="nav-plus m-box-center m-box-center-a"><i class="m-font m-font-arrow-down"></i></div>
		    </div>
		</div>
	</div>

	<!-- panel -->
	<div style="transform: translateY(51px); transition-duration: 0s;">
		<div class="m-tips m-tips-tp">
			<i class="m-font m-font-down m-font-down-ani"></i>
			<span class="main-link">下拉刷新</span>
		</div>
		<div class="pannelwrap" style="padding-top: 0px; padding-bottom: 0px;">
			<div class="wb-item-wrap"><div class="wb-item"></div></div>
			<div data-v-d40e2526="" class="wb-item-wrap">
    <div data-v-d40e2526="" class="wb-item">
        <div data-v-d40e2526="" class="card m-panel card9 f-weibo">
            <div class="card-wrap">
                <!---->
                <header class="weibo-top m-box">
                    <div class="m-avatar-box m-box-center"><a href="/profile/6124642021" class="m-img-box"><img src="https://tvax3.sinaimg.cn/crop.0.0.512.512.180/006GunaJly8fq5biapbhfj30e80e83yo.jpg"> <i class="m-icon m-icon-bluev"></i></a></div>
                    <div class="m-box-dir m-box-col m-box-center">
                        <div class="m-text-box"><a href="/profile/6124642021" class=""><h3 class="m-text-cut">新京报我们视频
              <!----> <i class="m-icon m-icon-vipl5"></i></h3></a> <h4 class="m-text-cut"><span class="time">7小时前</span> <span class="from"> 来自 微博网页版</span> <!----></h4>
                        </div>
                    </div>
                    <div callback="follow()" class="m-add-box m-followBtn"><span class="m-add-box"><i class="m-font m-font-plus"></i> <h4>关注</h4></span></div>
                </header>
            </div>
            <article class="weibo-main">
                <div class="card-wrap">
                    <div class="weibo-og">
                        <div class="weibo-text">【<a href="https://m.weibo.cn/search?containerid=231522type%3D1%26t%3D10%26q%3D%23%E4%B8%8A%E6%B5%B7%E6%9D%80%E5%A6%BB%E8%97%8F%E5%B0%B8%E6%A1%88%E4%BA%8C%E5%AE%A1%23&amp;extparam=%23%E4%B8%8A%E6%B5%B7%E6%9D%80%E5%A6%BB%E8%97%8F%E5%B0%B8%E6%A1%88%E4%BA%8C%E5%AE%A1%23&amp;luicode=10000011&amp;lfid=102803" data-hide=""><span class="surl-text">#上海杀妻藏尸案二审#</span></a> 公诉人：被告自首 但仍建议判死刑】12月13日，上海虹口杀妻藏尸冰柜案在上海高级人民法院二审开庭。8月23日，上海二中院一审宣判被告人朱晓东犯故意杀人罪判处死刑，朱于当天上诉。2016年，朱晓东将妻子杀害后把尸体藏在冰柜中100余天。<a href="https://m.weibo.cn/search?containerid=231522type%3D1%26t%3D10%26q%3D%23%E6%88%91%E4%BB%AC%E8%A7%86%E9%A2%91%E6%AD%A3%E5%9C%A8%E7%9B%B4%E6%92%AD%23&amp;isnewpage=1&amp;luicode=10000011&amp;lfid=102803" data-hide=""><span class="surl-text">#我们视频正在直播#</span></a> <a data-url="http://t.cn/EUxw6by" href="https://m.weibo.cn/feature/applink?scheme=sinaweibo%3A%2F%2Fchatroom%3Fcontainer_id%3D2313714377386c2305f80be70a555a59dd7b8a%26room_id%3D1042152%253A4377386c2305f80be70a555a59dd7b8a%26width%3D800%26height%3D450%26livetype%3D%26to%3Dmedia" data-hide=""><span class="url-icon"><img style="width: 1rem;height: 1rem" src="https://h5.sinaimg.cn/upload/2015/09/25/3/timeline_card_small_video_default.png"></span><span class="surl-text">新京报我们视频的微博直播</span></a> ...<a href="/status/4316707323640905">全文</a></div>
                        <div data-v-201380b2="">
                            <div data-v-201380b2="" class="weibo-media f-media">
                                <div data-v-201380b2="" class="weibo-media-wraps">
                                    <div data-v-2d25afce="" class="card-video type-video">
                                        <div data-v-2d25afce="" class="mwb-video mwbv-play mwbv-info">
                                            <div data-v-2d25afce="" class="m-img-box"><img data-v-2d25afce="" src="https://wx4.sinaimg.cn/large/006GunaJly1fy4w3k207vj318g0p0n4o.jpg"></div> <button data-v-2d25afce="" class="mwbv-play-button"><span data-v-2d25afce="" class="mwbv-icon"></span></button>
                                                <div data-v-2d25afce="" class="mwbv-info-bar">
                                                    <div data-v-2d25afce="" class="m-box">
                                                        <div data-v-2d25afce="" class="m-box-col"></div>
                                                        <div data-v-2d25afce="" class="time"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!---->
            </article>
            <footer class="f-footer-ctrl">
                <div class="m-diy-btn m-box-center-a"><i class="lite-iconf lite-iconf-report"></i> <h4>2717</h4>
                </div>
                <div class="m-diy-btn m-box-center-a"><i class="lite-iconf lite-iconf-comments"></i> <h4>2.6万</h4>
                </div>
                <div class="m-diy-btn m-box-center-a"><i class="lite-iconf lite-iconf-like"></i> <h4>19.9万</h4>
                </div>
                <aside><i class="m-font m-font-dot-more"></i></aside>
            </footer>
        </div>
    </div>
</div>
		</div>
	</div>
</div>
</template>

<script>
import axios from 'axios'

export default{
	data(){
		return{
			navlist:[],
			page:0
		}
	},
	methods:{
		getNavList(){
			var that = this;
			axios.get('http://localhost:4000/navlist').then(response=>{
				that.navlist = response.data.data.channel
			}).catch(error=>{
				console.log(error)
			})
		},
		navSwitch(index){
			console.log(index)
			this.page = index;
		}
	},
	created(){
		this.getNavList();
		this.navSwitch(0)
	}
}
</script>

<style>
@import url('../../css/app.css');
@import url('../../css/cards.css');

/*video btn*/
.mwb-video.mwbv-info .mwbv-info-bar, .mwb-video.mwbv-play .mwbv-play-button {
    display: block;
}

.mwb-video .mwbv-play-button {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3.375rem;
    height: 3.375rem;
    margin: 6.3125rem 0 0 -1.6875rem;
    background: rgba(0,0,0,.4);
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
}
.mwb-video button {
    padding: 0;
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
}
.mwb-video .mwbv-icon {
    display: inline-block;
    font-family: videofont;
    -webkit-font-smoothing: antialiased;
}
.mwb-video button {
    padding: 0;
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
}

/*video btn*/

.card .card-wrap{
	margin-left: 0;
    margin-right: 0;
    height: 100%;
}
.f-footer-ctrl {
    border-top-width: 0;
    height: 1.1rem;
    padding: 1rem .375rem 1rem 0;
    margin: 0 0.75rem;
}
.f-footer-ctrl .m-diy-btn {
    color: rgba(40,47,60,0.8);
    height: 100%;
    float: left;
}
.f-footer-ctrl .m-diy-btn+.m-diy-btn {
    margin-left: 1.6875rem;
}

.f-footer-ctrl .m-diy-btn {
    color: rgba(40,47,60,0.8);
    height: 100%;
    float: left;
}
.f-footer-ctrl aside {
    float: right;
    color: rgba(40,47,60,0.8);
}
</style>