<template>
  <div>
    <Content>
      <div slot="hd" class="head clearfix">
        <div class="fl">
          <i class="el-icon-edit-outline"></i>
          <strong>企业信息</strong>
        </div>
        <div class="fr">为必填项</div>
      </div>
      <div slot="bd" class="content">
        <Title>基本信息</Title>
        <el-form ref="form" :model="enterprise" label-width="80px">
          <el-form-item label="企业名称:" class="required">
            <el-input v-model="enterprise.name"></el-input>
          </el-form-item>
          <el-form-item label="企业简称:" class="required">
            <el-input v-model="enterprise.shortName"></el-input>
          </el-form-item>
          <el-form-item label="企业电话:" class="required">
            <el-input v-model="enterprise.call"></el-input>
          </el-form-item>
          <el-form-item label="企业类型:" class="required">
            <el-select v-model="enterprise.type" placeholder="选择企业类型">
              <el-option label="国有企业" value="public"></el-option>
              <el-option label="私有企业" value="private"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所属行业:" class="required">
            <el-select v-model="enterprise.industry" placeholder="选择行业">
              <el-option label="教育业" value="edu"></el-option>
              <el-option label="互联网" value="Intel"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所在地区:">
            <el-select v-model="enterprise.area" placeholder="选择地区">
              <el-option label="浙江" value="zhejiang"></el-option>
              <el-option label="江苏" value="jiangsu"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="详细地址:">
            <el-input v-model="enterprise.address"></el-input>
          </el-form-item>
          <el-form-item label="邮政编码:">
            <el-input v-model="enterprise.postcode"></el-input>
          </el-form-item>
          <el-form-item label="企业传真:">
            <el-input v-model="enterprise.fax"></el-input>
          </el-form-item>
          <el-form-item label="企业网址:">
            <el-input v-model="enterprise.website"></el-input>
          </el-form-item>
          <el-form-item label="成立时间">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="enterprise.createdate"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
          <Title>公司Logo</Title>
          <el-form-item label="公司Logo" class="required">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-change="upload"
            >
              <el-button size="small" type="primary">
                <i class="el-icon-folder-add"></i>选择附件
              </el-button>
              <div class="el-upload__tip">支持 JPG、JPEG、PNG、BMP 格式，图片小于10M</div>
            </el-upload>
            <div class="preview">
              <img width="50%" :src="enterprise.logo" alt />
              <div class="small">
                <span>LOGO预览</span>
                <br />
                <img width="50%" :src="enterprise.logo" alt />
              </div>
            </div>
          </el-form-item>
          <Title>企业联系人</Title>
          <el-form-item label="联系姓名:" class="required">
            <el-input v-model="enterprise.contact.name"></el-input>
          </el-form-item>
          <el-form-item label="尊称:">
            <el-radio-group v-model="enterprise.contact.gender">
              <el-radio :label="0">未知</el-radio>
              <el-radio :label="1">先生</el-radio>
              <el-radio :label="2">女士</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="部门职务:">
            <el-input v-model="enterprise.contact.job"></el-input>
          </el-form-item>
          <el-form-item label="手机号码:" class="required">
            <el-input v-model="enterprise.contact.phone"></el-input>
          </el-form-item>
          <el-form-item label="电子邮箱:">
            <el-input v-model="enterprise.contact.email"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="save" icon="el-icon-check">保存</el-button>
          </el-form-item>
        </el-form>
      </div>
    </Content>
  </div>
</template>

<script>
import Content from 'Components/Content/Content'
import Title from 'Components/Content/Title'
import ApiPath from '@/api/ApiPath'

export default {
  name: 'enterprise',
  components: {
    Content,
    Title
  },
  data () {
    return {
      enterprise: {
        name: '',
        shortName: '',
        call: '',
        type: [],
        industry: [],
        area: [],
        address: '',
        postcode: '',
        fax: '',
        website: '',
        createdate: '',
        contact: {
          name: '',
          gender: 0,
          job: '',
          phone: '',
          email: ''
        },
        logo: require('../../assets/img/dec99b9bly1g9cus2xtk8j21k91k9npd.jpg')
      }
    }
  },
  methods: {
    upload (file) {
      console.log(file.name)
      this.enterprise.logo = require(`../../assets/img/${file.name}`)
    },
    save () {
      this.$http
        .post(ApiPath.enterprise.addEnterprise, {
          params: {
            obj: this.enterprise
          }
        })
        .then(res => {
          console.log('请求成功' + res.data.data)
          this.list = res.data.data
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/scss/base.scss";
.head {
  font-size: 16px;
  color: #666;
  i {
    margin-right: 5px;
    font-size: 16px;
    font-weight: 700;
  }
  .fr {
    font-size: 14px;
  }
  .fr::before {
    content: "*";
    color: #f00;
  }
}
.content {
  padding-left: 300px;
  .el-form {
    margin-top: 25px;
    .el-form-item {
      position: relative;
      width: 60%;
      .preview {
        display: flex;
        img {
          height: 50%;
        }
        .small {
          display: inline-block;
          text-align: center;
        }
      }
    }
    .el-select {
      width: 100%;
    }
    .el-button {
      width: 50%;
      background: var(--color-background);
    }
  }
}
</style>
