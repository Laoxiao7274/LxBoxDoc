## 结构API
> 用于结构文件的API
### 使用方法
#### 命令
~~~
/lb structure form //打开结构模板表单
/lb structure init //确认结构中心点位置(先在结构表单中创建模板)
~~~
#### 其它
1.导出模板
> 请使用mc原版结构方块导出模板(即将上传视频)

2.导入模板
> 请将.mcstructure文件放入/plugins/LxBox/structure/内<br>每隔一分钟将会自动导入到mc数据文件中

### 结构类
~~~ts
    //结构模板名称
    StructureName: string
    //结构偏移量
    SkewPos: SkewPos
~~~
### 偏移量类
~~~ts
    /*
        比如生成位置原本为0，0，0
        偏移为10，2，-1
        那么偏移后的位置为-10，-2，1
        原生成位置-偏移位置 = 最后生成位置
    */
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number) {
        this.x = x
        this.y = y
        this.z = z
    }
~~~
### 结构函数导出
#### 创建模板
~~~js
    ll.imports("LB_STRUCTURE", "createModule")
~~~
- 返回函数: 
~~~ts
    createModule(StructureName: string,pos:IntPos):Result
~~~
- 参数：
- StructureName：`string`
  创建模板的名称
- pos: `IntPos`
  模板中心坐标
- 返回值: `Result`
~~~yml
{
    //0为失败1为成功
    result: 1
    //提示消息
    msg: ''
    //返回数据(空)
    data: {}
}
~~~
~~~yml
{
    //0为失败1为成功
    result: 0
    //提示消息(模板已经存在)
    msg: 'STRUCTURE_TEMPLATE_EXIST'
    //返回数据(空)
    data: {}
}
~~~

#### 删除模板
~~~js
    ll.imports("LB_STRUCTURE", "deleteModule")
~~~
- 返回函数: 
~~~ts
    deleteModule(StructureName: string):Result
~~~
- 参数：
- StructureName：`string`
  模板的名称
- 返回值: `Result`
~~~yml
{
    //0为失败1为成功
    result: 1
    //提示消息
    msg: ''
    //返回数据(空)
    data: {}
}
~~~
~~~yml
{
    //0为失败1为成功
    result: 0
    //提示消息(模板不存在)
    msg: 'STRUCTURE_TEMPLATE_NOT_EXIST'
    //返回数据(空)
    data: {}
}
~~~
#### 生成模板
~~~js
    ll.imports("LB_STRUCTURE", "spawnModule")
~~~
- 返回函数: 
~~~ts
    spawnModule(StructureName:string,pos:IntPos):Result
~~~
- 参数：
- StructureName：`string`
  模板的名称
- pos: `IntPos`
  生成坐标
- 返回值: `Result`
~~~yml
{
    //0为失败1为成功
    result: 1
    //提示消息
    msg: ''
    //返回数据(空)
    data: {}
}
~~~
~~~yml
{
    //0为失败1为成功
    result: 0
    //提示消息(模板已经存在)
    msg: '(structure命令返回的错误消息)'
    //返回数据(空)
    data: {}
}
~~~
#### 获取所有结构模板名称
~~~js
    ll.imports("LB_STRUCTURE", "getAllStructureName")
~~~
- 返回函数: 
~~~ts
    getAllStructureName(): Array<string>
~~~
- 参数：
- 返回值: `Array<string>`
> 例如: ["sky.mcstructure","sky2.mcstructure"]
#### 获取未初始化模板名称
~~~js
    ll.imports("LB_STRUCTURE", "getDisableStructure")
~~~
- 返回函数: 
~~~ts
    getDisableStructure(): Array<string>
~~~
- 参数：
- 返回值: `Array<string>`
> 例如: ["sky.mcstructure","sky2.mcstructure"]
#### 根据模板名称获取模板
~~~js
    ll.imports("LB_STRUCTURE", "getStructureByName")
~~~
- 返回函数: 
~~~ts
    getStructureByName(StructureName:string):Result<Structure>
~~~
- 参数：
- StructureName：`string`
  模板的名称
- 返回值: `Result`
~~~yml
{
    //0为失败1为成功
    result: 1
    //提示消息
    msg: ''
    //返回数据(Structure对象)
    data: Structure
}
~~~
~~~yml
{
    //0为失败1为成功
    result: 0
    //提示消息(未知错误)
    msg: 'UNKNOWN_ERROR'
    //返回数据(空)
    data: {}
}
~~~
#### 根据模板名称判断是否存在
~~~js
    ll.imports("LB_STRUCTURE", "isHaveModule")
~~~
- 返回函数: 
~~~ts
    isHaveModule(StructureName:string):boolean
~~~
- 参数：
- StructureName：`string`
  模板的名称
- 返回值: `boolean`


