export const subMenuMixin = {
   data() {
     return {
       item: {
         type: 0,
         parentName: ''
       },
       subMenu: [
         {
           name: '维科嘉丰',
           type: 1,
           children: [
             {
               name: '经理室',
               type:2,
               parenName: '维科嘉丰',
               children: [
                 {
                   parentName: '经理室',
                   name: "综合管理部",
                   type: 3,
                   children: []
                 }
               ]
             },
             {
               name: '财务部',
               parenName: '维科嘉丰',
               type:2,
               children: []
             },
             {
               name: '风控部',
               parenName: '维科嘉丰',
               type:2,
               children: []
             },
             {
               name: '运营部',
               parenName: '维科嘉丰',
               type:2,
               children: []
             }
           ]
         },
         {
           name: '上海业务部',
           type:1,
           children: [
             {
               name: '佳润',
               parenName: '上海业务部',
               type:2,
               children: []
             },
             {
               name: '镍金属部',
               parenName: '上海业务部',
               type:2,
               children: []
             }
           ]
         }
       ],
       tipArray: [
         "是否删除机构",
         "是否删除部门"
       ]
     }
   },
   methods: {
     addpartment() {
       this.item.type = 1
       this.$refs['addbox'].show()
     },
     addItem(item) {
       console.log(item)
       this.item.type = item.type + 1 // 给子节点加数据
       this.item.parentName = item.name
       this.$refs['addbox'].show()
     },
     deleteItem(item) {
       layer.open({
         title:'删除',
         content:
           `
          ${this.tipArray[item.type - 1]} <em style="font-weight: 700">${item.name}</em>
          <br/>
          <br/>
          删除前，请查看是否有员工，若有则无法删除的哦
          `
         ,btn: ['确认', '取消']
         ,yes: (index, layero)=>{
           if (item.type === 1) {
             for (let i in this.subMenu) {
               if (this.subMenu[i].name === item.name) {
                 this.subMenu.splice(i, 1)
                 break
               }
             }
           } else if(item.type == 2) {
             for (let i in this.subMenu) {
               for (let j in this.subMenu[i].children){
                 if (this.subMenu[i].children[j].name === item.name) {
                   this.subMenu[i].children.splice(j, 1)
                 }
               }
             }
           }
           // 后台接口
           layer.close(index);
         }
         ,btn2: (index, layero) => {
         }
         ,cancel: function(){
         }
       });
     },
     ackSubmit(name) {
       this.item.name = name
       if (this.item.type === 1) {
         this.subMenu.push({
           name,
           type:1,
           children: []
         })
       } else if (this.item.type === 2) {
         for (let i in this.subMenu) {
           if (this.item.parentName === this.subMenu[i].name) {
             this.subMenu[i].children.push({
               name,
               parentName: this.item.parentName,
               type: 2,
               children: []
             })
           }
         }
       } else {
         for (let i in this.subMenu) {
           for (let j in this.subMenu[i].children) {
             if (this.item.parentName === this.subMenu[i].children[j].name) {
               this.subMenu[i].children[j].children.push({
                 name,
                 parentName: this.item.parentName,
                 type: 3,
                 children: []
               })
             }
           }
         }
       }
       this.$refs['addbox'].hide()
     }
   }
}
