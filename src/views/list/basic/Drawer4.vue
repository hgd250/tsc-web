<template>
  <BasicDrawer v-bind="$attrs" @register="register" title="Assign Organization" width="50%">
    <div>
      <BasicForm @register="registerForm" />
    </div>
    <div>
        <a-button type="primary" @click="closeDrawer"> Submit </a-button>
    </div>
  </BasicDrawer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';

  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { message } from 'ant-design-vue';


  const schemas: FormSchema[] = [
    {
      field: 'Organization',
      component: 'Select',
      label: 'Organization',
      colProps: {
        span: 24,
      },
      componentProps: {
      mode: 'multiple',
          options: [
            {
              label: 'Hospital of Delaware',
              value: '1'
            },
            {
              label: 'Google',
              value: '2'
            },
            {
              label: 'Amazon',
              value: '3'
            },
            {
              label: 'Delaware Healthcare Association',
              value: '4'
            },
            {
              label: 'Addiction Treatment Center',
              value: '5'
            },
            {
              label: 'Apple',
              value: '6'
            },
            {
              label: 'Microsoft',
              value: '7'
            },
            {
              label: 'IBM',
              value: '8'
            }
          ],
        },
    },
    {
      field: 'Services',
      component: 'Select',
      label: 'Services',
      colProps: {
        span: 24,
      },
      componentProps: {
      mode: 'multiple',
          options: [
            {
              label: 'Training',
              value: '1'
            },
            {
              label: 'Education',
              value: '2'
            },
            {
              label: 'Healthcare',
              value: '3'
            },
            {
              label: 'Addiction Treatment',
              value: '4'
            },
            {
              label: 'Provide Job',
              value: '5'
            },
          ],
        },
    },

    {
    field: 'target',
    component: 'InputTextArea',
    label: 'Description',
    colProps: {
        span: 24,
      },
    componentProps: {
      placeholder: 'Navigator Suggestion...',
      rows: 4,
    },
      },

  ];
  export default defineComponent({

    components: { BasicDrawer, BasicForm },

    setup() {
      const [registerForm, { setFieldsValue }] = useForm({
        labelWidth: 120,
        schemas,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 24,
        },
      });

      const [register, { closeDrawer }]  = useDrawerInner((data) => {
        // 方式1
        setFieldsValue({
          field2: data.data,
          field1: data.info,
        });
      });

      return { register, closeDrawer, schemas, registerForm };
    },
  });
</script>
