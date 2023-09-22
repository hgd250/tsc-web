<template>

  <div class="m-5 result-success">
    <a-space direction="vertical" :style="{ width: '100%' }" :size="[0, 48]">

      <a-layout>
        <a-layout>
          <a-layout-sider :style="siderStyle">
                <a-space >
                  <a-avatar :size="150">
                    <template #icon>
                      <a-image
                        :width="150"
                        src="https://tse3-mm.cn.bing.net/th/id/OIP-C.oIy82pW7avvLJcWByN5X1AAAAA?pid=ImgDet&rs=1"
                      />
                    </template>
                  </a-avatar>
                </a-space>


          </a-layout-sider>

          <a-layout-content :style="contentStyle">

            <a-descriptions>

              <a-descriptions-item label="Name"> John Barry</a-descriptions-item>
              <a/>
              <a-descriptions-item label="Telephone">+1 23***2135</a-descriptions-item>
            </a-descriptions>
            <a-descriptions>
              <a-descriptions-item label="Requirement">Job Skills, Healthy Treatment </a-descriptions-item>
              <a/>
              <a-descriptions-item label="Join Date">2016-10-24</a-descriptions-item>
            </a-descriptions>
            <a-descriptions>
              <a-descriptions-item label="Progress">

              </a-descriptions-item>
            </a-descriptions>

          </a-layout-content>
          <a-layout-sider :style="siderStyle">
            <a-progress
              type="circle"
              :stroke-color="{
                '0%': '#108ee9',
                '100%': '#87d068',
              }"
              :percent="33"
            />
          </a-layout-sider>
        </a-layout>
        <a-layout-footer :style="footerStyle">
          
          <Steps :current="0" progress-dot size="large">
            <Step title="Join">
              <template #description>
                <p>2016-10-24 12:32</p>
              </template>
            </Step>
            <Step title="Job Training">
              <template #description>
                <p>2016-11-22 12:32</p>
                <p>Planned</p>

              </template>
            </Step>
            <Step title="Health" >
              <template #description>
<!--                <p>2017-01-26 15:30</p>-->
               <p>Planned</p>

              </template>
            </Step>
            <Step title="Completed" >
              <template #description>
<!--                <p>2017-05-25 15:30</p>-->
              </template>
            </Step>
          </Steps>
        </a-layout-footer>
      </a-layout>

    </a-space>

    <a-page-header
      style="border: 1px solid rgb(235, 237, 240)"
      title="Message Center"
    />


<!--comments-->
<!--    <a-comment>-->
<!--      <template #actions>-->
<!--        <span key="comment-nested-reply-to">Reply to</span>-->
<!--      </template>-->
<!--      <template #author>-->
<!--        <a>Johns</a>-->
<!--      </template>-->
<!--      <template #avatar>-->
<!--        <a-avatar src="https://tse3-mm.cn.bing.net/th/id/OIP-C.oIy82pW7avvLJcWByN5X1AAAAA?pid=ImgDet&rs=1" alt="John" />-->
<!--      </template>-->
<!--      <template #content>-->
<!--        <p>-->
<!--         I will never forget today in my life! i Got my home today! I feel really graceful. Thanks everyone who ever helped me! I never thought i could really got my own house! I could't get it withour your help! Thanks everyone!(From cellphone on 20170525)-->
<!--        </p>-->
<!--      </template>-->
<!--      <a-comment>-->
<!--        <template #author>-->
<!--          <a>Delaware Heathy Center</a>-->
<!--        </template>-->
<!--        <template #avatar>-->
<!--          <a-avatar src="https://ts1.cn.mm.bing.net/th/id/R-C.8909256c2f78c2ff828ceae7f28009ca?rik=T4TXSMZNXASm3Q&pid=ImgRaw&r=0" alt="Jxy" />-->
<!--        </template>-->
<!--        <template #content>-->
<!--          <p>-->
<!--            <a>@John</a>,<a>@TSC staff</a>, just a reminder that john need to come to our hospital for the treatment on 20170130(From PC on 20170126)-->
<!--          </p>-->
<!--        </template>-->
<!--        <a-comment>-->
<!--          <template #actions>-->
<!--            <span>Reply to</span>-->
<!--          </template>-->
<!--          <template #author>-->
<!--            <a>TSC Staff</a>-->
<!--          </template>-->
<!--          <template #avatar>-->
<!--            <a-avatar src="https://ts1.cn.mm.bing.net/th/id/R-C.d04ab4b23b2e4b577f28bb38a5cdaf4e?rik=oV4iTAagIbE2CA&pid=ImgRaw&r=0" alt="Han Solo" />-->
<!--          </template>-->
<!--          <template #content>-->
<!--            <p>-->
<!--              Confirmed. (From cellphone on 20171126)-->
<!--            </p>-->
<!--          </template>-->
<!--        </a-comment>-->
<!--        <a-comment>-->
<!--          <template #actions>-->
<!--            <span>Reply to</span>-->
<!--          </template>-->
<!--          <template #author>-->
<!--            <a>John</a>-->
<!--          </template>-->
<!--          <template #avatar>-->
<!--            <a-avatar src="https://tse3-mm.cn.bing.net/th/id/OIP-C.oIy82pW7avvLJcWByN5X1AAAAA?pid=ImgDet&rs=1" alt="Han Solo" />-->
<!--          </template>-->
<!--          <template #content>-->
<!--            <p>-->
<!--              Confirmed. (From cellphone on 201711126)-->
<!--            </p>-->
<!--          </template>-->

<!--        </a-comment>-->
<!--      </a-comment>-->
<!--    </a-comment>-->
<!--3 end-->
<!-- 2 -->
<!--    <a-comment>-->
<!--      <template #actions>-->
<!--        <span key="comment-nested-reply-to">Reply to</span>-->
<!--      </template>-->
<!--      <template #author>-->
<!--        <a>Johns</a>-->
<!--      </template>-->
<!--      <template #avatar>-->
<!--        <a-avatar src="https://tse3-mm.cn.bing.net/th/id/OIP-C.oIy82pW7avvLJcWByN5X1AAAAA?pid=ImgDet&rs=1" alt="John" />-->
<!--      </template>-->
<!--      <template #content>-->
<!--        <p>-->
<!--          <a>@Delawre job Center</a>. I feel really appreciated for this skill training. It's very helpful. Thanks a lot!(From PC on 20161122)-->
<!--        </p>-->
<!--      </template>-->
<!--      <a-comment>-->
<!--        <template #author>-->
<!--          <a>Delawre job Center</a>-->
<!--        </template>-->
<!--        <template #avatar>-->
<!--          <a-avatar src="https://ts1.cn.mm.bing.net/th/id/R-C.420bc87022ea8ed31390a6248ccbd08c?rik=T8D%2fAKulu58QmA&pid=ImgRaw&r=0" alt="Jxy" />-->
<!--        </template>-->
<!--        <template #content>-->
<!--          <p>-->
<!--            <a>@John</a>,<a>@TSC staff</a>, As just spoke in the call. Please make sure you attended the skill training on next Monday Nov 21st. (From PC on 20161115)          </p>-->
<!--        </template>-->
<!--                <a-comment>-->
<!--                  <template #actions>-->
<!--                    <span>Reply to</span>-->
<!--                  </template>-->
<!--                  <template #author>-->
<!--                    <a>TSC Staff</a>-->
<!--                  </template>-->
<!--                  <template #avatar>-->
<!--                    <a-avatar src="https://ts1.cn.mm.bing.net/th/id/R-C.d04ab4b23b2e4b577f28bb38a5cdaf4e?rik=oV4iTAagIbE2CA&pid=ImgRaw&r=0" alt="Han Solo" />-->
<!--                  </template>-->
<!--                  <template #content>-->
<!--                    <p>-->
<!--                      Confirmed. (From cellphone on 20161115)-->
<!--                    </p>-->
<!--                  </template>-->
<!--                </a-comment>-->
<!--                <a-comment>-->
<!--                  <template #actions>-->
<!--                    <span>Reply to</span>-->
<!--                  </template>-->
<!--                  <template #author>-->
<!--                    <a>John</a>-->
<!--                  </template>-->
<!--                  <template #avatar>-->
<!--                    <a-avatar src="https://tse3-mm.cn.bing.net/th/id/OIP-C.oIy82pW7avvLJcWByN5X1AAAAA?pid=ImgDet&rs=1" alt="Han Solo" />-->
<!--                  </template>-->
<!--                  <template #content>-->
<!--                    <p>-->
<!--                      Confirmed. (From cellphone on 20161115)-->
<!--                    </p>-->
<!--                  </template>-->

<!--                </a-comment>-->
<!--      </a-comment>-->
<!--    </a-comment>-->
<!--2 end -->

    <a-comment >
      <template #actions>
        <span key="comment-nested-reply-to">Reply to</span>
      </template>
      <template #author>
        <a>John</a>
      </template>
      <template #avatar>
        <a-avatar src="https://tse3-mm.cn.bing.net/th/id/OIP-C.oIy82pW7avvLJcWByN5X1AAAAA?pid=ImgDet&rs=1" alt="John" />
      </template>
      <template #content>
        <p>
          I'm very happy to join the spring board community. Thanks everyone who ever gives me the help!(From PC on 20161024)
        </p>
      </template>
      <a-comment>
        <template #author>
          <a>TSC Staff</a>
        </template>
        <template #avatar>
          <a-avatar src="https://ts1.cn.mm.bing.net/th/id/R-C.d04ab4b23b2e4b577f28bb38a5cdaf4e?rik=oV4iTAagIbE2CA&pid=ImgRaw&r=0" alt="Jxy" />
        </template>
        <template #content>
          <p>
            Hi John, It's our honor to help you and all other people like you who need help.(From cellphone on 20161024)
          </p>
        </template>

      </a-comment>
    </a-comment>
<!--comments-->

  </div>

</template>
<script lang="ts" setup>
  import { defineComponent } from 'vue';
  import { Result, Steps, Descriptions } from 'ant-design-vue';
  import 'ant-design-vue/dist/reset.css';
  import  UserOutlined from  '@ant-design/icons-vue';
  const Step = Steps.Step;
  const Item = Descriptions.Item;

const headerStyle: CSSProperties = {
  textAlign: 'center',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: 'white',
};

const contentStyle: CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  backgroundColor: 'white',
};

const siderStyle: CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  backgroundColor: 'white',
};

const footerStyle: CSSProperties = {
  textAlign: 'center',
  backgroundColor: 'white',
};


</script>
<style lang="less" scoped>
  .result-success {
    padding: 48px 32px;
    background-color: @component-background;

    &__content {
      padding: 24px 40px;
      background-color: @background-color-light;
    }
  }
</style>
