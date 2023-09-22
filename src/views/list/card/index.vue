<template>
  <PageWrapper :class="prefixCls" title="">
    <template #headerContent>
      Our origination create at 2000 year, we can provide Job Skill and health treatment and provision of legel aid      <div :class="`${prefixCls}__link`">
        <a><Icon icon="bx:bx-paper-plane" color="#1890ff" /><span></span></a>
        <a><Icon icon="carbon:warning" color="#1890ff" /><span></span></a>
        <a><Icon icon="ion:document-text-outline" color="#1890ff" /><span></span></a>
      </div>
    </template>

    <div :class="`${prefixCls}__content`">
      <a-list>
        <a-row :gutter="16">
          <template v-for="item in data" :key="item.title">
            <a-col :span="8">
              <a-list-item>
                <a-card :hoverable="true" :class="`${prefixCls}__card`"  @click="details">
                  <div :class="`${prefixCls}__card-title`">
                    <img data-v-79a82383="" width="70" :src="item.img">
                    {{ item.name }}
                  </div>
                  <router-link to="/dashboard/homeless">   {{ item.desc }} </router-link>
                  <div :class="`${prefixCls}__card-detail`">
                  </div>
                </a-card>
              </a-list-item>
            </a-col>
          </template>
        </a-row>
      </a-list>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import Icon from '@/components/Icon/Icon.vue';
  import { cardList } from './data';
  import { PageWrapper } from '/@/components/Page';
  import { Card, Row, Col, List } from 'ant-design-vue';
   import axios from 'axios'
  export default defineComponent({
    components: {
      Icon,
      PageWrapper,
      [Card.name]: Card,
      [List.name]: List,
      [List.Item.name]: List.Item,
      [Row.name]: Row,
      [Col.name]: Col,
    },
    setup() {
      function  details(){

         return [ { "name": "Jackson", "img": "", "desc": "Jackson join at 20201126, need Job Skill and Hearth treatment                    " },
                  { "name": "Kinsley", "img": "", "desc": "Kinsley joined at 20210212, need some food and water and provide her with shelter" },
                  { "name": "Jameson", "img": "", "desc": "Jameson join at 20200504, need mental health support and provision of legal aid  " }];
      }
      return {
        prefixCls: 'list-card',
        list: cardList,
        data : details(),

      };
    },
  });
</script>
<style lang="less" scoped>
  .list-card {
    &__link {
      margin-top: 10px;
      font-size: 14px;

      a {
        margin-right: 30px;
      }

      span {
        margin-left: 5px;
      }
    }

    &__card {
      width: 100%;
      margin-bottom: -8px;

      .ant-card-body {
        padding: 16px;
      }

      &-title {
        margin-bottom: 5px;
        color: @text-color;
        font-size: 16px;
        font-weight: 500;

        .icon {
          margin-top: -5px;
          margin-right: 10px;
          font-size: 38px !important;
        }
      }

      &-detail {
        padding-top: 10px;
        padding-left: 30px;
        color: @text-color-secondary;
        font-size: 14px;
      }
    }
  }
</style>
