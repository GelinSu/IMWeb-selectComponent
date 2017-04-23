			//全局注册
			Vue.component("custom-select",{
				data:function(){
					return {
						selectShow:false,		<!--隐藏下拉列表-->
						val:""			<!--方便于后面input赋值-->
					};
				},
				props:["btn","list"],		<!--此处props用于传入value的“btn”值,从根节点传入list值-->
				<!--模板-->
				template:`<section class="warp">
							<div class="searchIpt clearFix">
								<div class="clearFix">
									<input type="text" class="keyWord" :value="val" @click="selectShow = !selectShow" />
									<input type="button" :value="btn">
									<span></span>
								</div>
								<custom-list 
									v-show="selectShow" 
									:list="list"
									v-on:receive="changeValueHandle"
								></custom-list>
							</div>
						   </section>`,
				
				methods:{
					<!--将选中的list值放到input里面-->
					changeValueHandle(value){
						this.val = value;
					}
				}
			})
			
			<!--将前面"custom-select"中的<ul>标签提取出来，作为子组件,propt是从父组件传入list值-->
			Vue.component("custom-list",{
				props:["list"],			
				template:`<ul class="list">
							<li v-for="item of list" @click="selectValueHandle(item)">{{item}}</li>
						</ul>`,
				methods:{
					selectValueHandle:function(item){
						this.$emit("receive",item);
					}
				}
			})		

			new Vue({
				el:"#app",
				data:{
					list1:["北京","深圳","广州"],
					list2:["2017-04-20","2017-04-21","2017-04-22"]
				}
			});