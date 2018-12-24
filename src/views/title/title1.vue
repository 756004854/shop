<template lang="">
	<div class="music">
		请输入单曲名称 <el-input v-model="input" placeholder="请输入内容" clearable></el-input>
		<el-button @click="goMMusic">搜索</el-button>
		<el-table
      :data="tableData"
      border
      style="width: 100%"
			height="500"
		>
			<el-table-column
        prop="name"
        label="名称"
      >
     		<template slot-scope="scope">
	        <el-button @click="goToLink(scope.row)" type="text" size="small">{{scope.row.name}}&emsp;点击播放</el-button>
				</template>
      </el-table-column>
			<el-table-column
        prop="singer"
        label="作者"
        width="200"
      >
      </el-table-column>
		</el-table>
	</div>
</template>
<script>
export default {
		name:"music",
		data() {
			return {
				tableData: [],
				input : ""
			}
		},
    created(){
			// 如 ip 被拉黑请联系 群管理员解封  qq 群 579621905
			// 网易云文档 ?key=579621905&id=3778678&limit=10&offset=0
			var link = "https://www.bzqll.com/2018/10/39.html"
			this.axios.get("/api/music/netease/songList", {
				params:{
					key : "579621905",
					id : "3778678",
					limit : 10,
					offset : 0,
				}
			}).then(res => {
					console.log(res.data.data.songs[0])
					this.tableData = res.data.data.songs
					// 成功回调
				}, res => {
					console.log(res)
					// 错误回调
				})
		},
		methods:{
			goToLink(row){
				window.open(row.url)
			},
			goMMusic(){
				console.log(this.input.trim())
				this.axios.get("/api/music/netease/search", {
					params: {
						key: "579621905",
						s: this.input.trim()
					}
				}).then(res => {
					console.log(res)
					this.tableData = res.data.data
				}, res => {
					console.log(res)
				})
			}
		}
    
}
</script>