<template>
  <div>
    <!-- 头部 -->
    <div class="attendances-top">
      <div class="attendances-top-title">
        <el-alert
          title="有 0 条考勤审批尚未处理"
          type="info"
          style="
            width: 360px;
            height: 40px;
            background: #e6f7ff;
            border: 1px solid #91d5ff;
            margin-top: 30px;
            color: #000;
            margin-left: 20px;
          "
          show-icon
          :closable="false"
        >
        </el-alert>
        <div style="margin: 30px 20px 0 0">
          <el-button
            type="danger"
            size="small"
            @click="$router.push('/Atrtreport')"
            >导入</el-button
          >
          <el-button type="warning" size="small">提醒</el-button>
          <el-button
            type="primary"
            size="small"
            @click="Attsetupstatus = !Attsetupstatus"
            >设置</el-button
          >
          <el-button size="small" @click="$router.push('/Atthistory')"
            >历史归档</el-button
          >
          <el-button
            type="primary"
            size="small"
            @click="$router.push('/Atrtreports')"
            >202303报表</el-button
          >
        </div>
      </div>
    </div>
    <!-- 中间内容 -->
    <div class="attendances-text">
      <div class="attendances-text-department">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="部门：">
            <el-checkbox-group v-model="form.type">
              <el-checkbox
                v-for="(item, index) in department"
                :key="index"
                :label="item.name"
                v-model="item.checked"
                :name="item.id"
                @change="fliter(item, index)"
              ></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="考勤状态：  ">
            <el-checkbox-group v-model="form.type1">
              <el-checkbox label="正常" name="正常" />
              <el-checkbox label="矿工" name="矿工" />
              <el-checkbox label="事假" name="事假" />
              <el-checkbox label="调休" name="调休" />
              <el-checkbox label="迟到" name="迟到" />
              <el-checkbox label="早退" name="早退" />
            </el-checkbox-group>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <!-- 表格内容 -->
    <div class="attendances-table">
      <!-- 表格 -->
      <el-table
        :data="$store.state.attendances.tableData"
        border
        style="width: 95%; margin: 20px 0 20px 20px"
      >
        <el-table-column type="index" label="序号" width="60">
        </el-table-column>
        <el-table-column prop="username" label="姓名" width="80" />
        <el-table-column prop="workNumber" label="工号" />
        <el-table-column prop="departmentName" label="部门" />
        <el-table-column prop="mobile" label="4/1">
          <template #default="scope">
            {{ scope.row.attendanceRecord[0].adtStatu == 1 ? '√' : '' }}
            {{ scope.row.attendanceRecord[0].adtStatu == 2 ? '旷工' : '' }}
            {{ scope.row.attendanceRecord[0].adtStatu == 3 ? '迟到' : '' }}
            {{ scope.row.attendanceRecord[0].adtStatu == 4 ? '早退' : '' }}
            {{ scope.row.attendanceRecord[0].adtStatu == 5 ? '外出' : '' }}
            {{ scope.row.attendanceRecord[0].adtStatu == 6 ? '出差' : '' }}
            {{ scope.row.attendanceRecord[0].adtStatu == 7 ? '年假' : '' }}
            {{ scope.row.attendanceRecord[0].adtStatu == 8 ? '事假' : '' }}
            {{ scope.row.attendanceRecord[0].adtStatu == 9 ? '病假' : '' }}
            {{ scope.row.attendanceRecord[0].adtStatu == 10 ? '婚假' : '' }}
            {{ scope.row.attendanceRecord[0].adtStatu == 11 ? '丧假' : '' }}
            {{ scope.row.attendanceRecord[0].adtStatu == 12 ? '产假' : '' }}
            {{ scope.row.attendanceRecord[0].adtStatu == 13 ? '奖励产假' : '' }}
            {{ scope.row.attendanceRecord[0].adtStatu == 14 ? '陪产假' : '' }}
            {{ scope.row.attendanceRecord[0].adtStatu == 15 ? '探亲假' : '' }}
            {{ scope.row.attendanceRecord[0].adtStatu == 16 ? '工伤假' : '' }}
            {{ scope.row.attendanceRecord[0].adtStatu == 17 ? '调休' : '' }}
            {{ scope.row.attendanceRecord[0].adtStatu == 18 ? '产检假' : '' }}
            {{ scope.row.attendanceRecord[0].adtStatu == 19 ? '流产假' : '' }}
            {{ scope.row.attendanceRecord[0].adtStatu == 20 ? '长期病假' : '' }}
            {{ scope.row.attendanceRecord[0].adtStatu == 21 ? '测试假' : '' }}
            {{ scope.row.attendanceRecord[0].adtStatu == 22 ? '补签' : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/2">
          <template #default="scope">
            {{ scope.row.attendanceRecord[1].adtStatu == 1 ? '√' : '' }}
            {{ scope.row.attendanceRecord[1].adtStatu == 2 ? '旷工' : '' }}
            {{ scope.row.attendanceRecord[1].adtStatu == 3 ? '迟到' : '' }}
            {{ scope.row.attendanceRecord[1].adtStatu == 4 ? '早退' : '' }}
            {{ scope.row.attendanceRecord[1].adtStatu == 5 ? '外出' : '' }}
            {{ scope.row.attendanceRecord[1].adtStatu == 6 ? '出差' : '' }}
            {{ scope.row.attendanceRecord[1].adtStatu == 7 ? '年假' : '' }}
            {{ scope.row.attendanceRecord[1].adtStatu == 8 ? '事假' : '' }}
            {{ scope.row.attendanceRecord[1].adtStatu == 9 ? '病假' : '' }}
            {{ scope.row.attendanceRecord[1].adtStatu == 10 ? '婚假' : '' }}
            {{ scope.row.attendanceRecord[1].adtStatu == 11 ? '丧假' : '' }}
            {{ scope.row.attendanceRecord[1].adtStatu == 12 ? '产假' : '' }}
            {{ scope.row.attendanceRecord[1].adtStatu == 13 ? '奖励产假' : '' }}
            {{ scope.row.attendanceRecord[1].adtStatu == 14 ? '陪产假' : '' }}
            {{ scope.row.attendanceRecord[1].adtStatu == 15 ? '探亲假' : '' }}
            {{ scope.row.attendanceRecord[1].adtStatu == 16 ? '工伤假' : '' }}
            {{ scope.row.attendanceRecord[1].adtStatu == 17 ? '调休' : '' }}
            {{ scope.row.attendanceRecord[1].adtStatu == 18 ? '产检假' : '' }}
            {{ scope.row.attendanceRecord[1].adtStatu == 19 ? '流产假' : '' }}
            {{ scope.row.attendanceRecord[1].adtStatu == 20 ? '长期病假' : '' }}
            {{ scope.row.attendanceRecord[1].adtStatu == 21 ? '测试假' : '' }}
            {{ scope.row.attendanceRecord[1].adtStatu == 22 ? '补签' : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/3">
          <template #default="scope">
            {{ scope.row.attendanceRecord[2].adtStatu == 1 ? '√' : '' }}
            {{ scope.row.attendanceRecord[2].adtStatu == 2 ? '旷工' : '' }}
            {{ scope.row.attendanceRecord[2].adtStatu == 3 ? '迟到' : '' }}
            {{ scope.row.attendanceRecord[2].adtStatu == 4 ? '早退' : '' }}
            {{ scope.row.attendanceRecord[2].adtStatu == 5 ? '外出' : '' }}
            {{ scope.row.attendanceRecord[2].adtStatu == 6 ? '出差' : '' }}
            {{ scope.row.attendanceRecord[2].adtStatu == 7 ? '年假' : '' }}
            {{ scope.row.attendanceRecord[2].adtStatu == 8 ? '事假' : '' }}
            {{ scope.row.attendanceRecord[2].adtStatu == 9 ? '病假' : '' }}
            {{ scope.row.attendanceRecord[2].adtStatu == 10 ? '婚假' : '' }}
            {{ scope.row.attendanceRecord[2].adtStatu == 11 ? '丧假' : '' }}
            {{ scope.row.attendanceRecord[2].adtStatu == 12 ? '产假' : '' }}
            {{ scope.row.attendanceRecord[2].adtStatu == 13 ? '奖励产假' : '' }}
            {{ scope.row.attendanceRecord[2].adtStatu == 14 ? '陪产假' : '' }}
            {{ scope.row.attendanceRecord[2].adtStatu == 15 ? '探亲假' : '' }}
            {{ scope.row.attendanceRecord[2].adtStatu == 16 ? '工伤假' : '' }}
            {{ scope.row.attendanceRecord[2].adtStatu == 17 ? '调休' : '' }}
            {{ scope.row.attendanceRecord[2].adtStatu == 18 ? '产检假' : '' }}
            {{ scope.row.attendanceRecord[2].adtStatu == 19 ? '流产假' : '' }}
            {{ scope.row.attendanceRecord[2].adtStatu == 20 ? '长期病假' : '' }}
            {{ scope.row.attendanceRecord[2].adtStatu == 21 ? '测试假' : '' }}
            {{ scope.row.attendanceRecord[2].adtStatu == 22 ? '补签' : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/4">
          <template #default="scope">
            {{ scope.row.attendanceRecord[3].adtStatu == 1 ? '√' : '' }}
            {{ scope.row.attendanceRecord[3].adtStatu == 2 ? '旷工' : '' }}
            {{ scope.row.attendanceRecord[3].adtStatu == 3 ? '迟到' : '' }}
            {{ scope.row.attendanceRecord[3].adtStatu == 4 ? '早退' : '' }}
            {{ scope.row.attendanceRecord[3].adtStatu == 5 ? '外出' : '' }}
            {{ scope.row.attendanceRecord[3].adtStatu == 6 ? '出差' : '' }}
            {{ scope.row.attendanceRecord[3].adtStatu == 7 ? '年假' : '' }}
            {{ scope.row.attendanceRecord[3].adtStatu == 8 ? '事假' : '' }}
            {{ scope.row.attendanceRecord[3].adtStatu == 9 ? '病假' : '' }}
            {{ scope.row.attendanceRecord[3].adtStatu == 10 ? '婚假' : '' }}
            {{ scope.row.attendanceRecord[3].adtStatu == 11 ? '丧假' : '' }}
            {{ scope.row.attendanceRecord[3].adtStatu == 12 ? '产假' : '' }}
            {{ scope.row.attendanceRecord[3].adtStatu == 13 ? '奖励产假' : '' }}
            {{ scope.row.attendanceRecord[3].adtStatu == 14 ? '陪产假' : '' }}
            {{ scope.row.attendanceRecord[3].adtStatu == 15 ? '探亲假' : '' }}
            {{ scope.row.attendanceRecord[3].adtStatu == 16 ? '工伤假' : '' }}
            {{ scope.row.attendanceRecord[3].adtStatu == 17 ? '调休' : '' }}
            {{ scope.row.attendanceRecord[3].adtStatu == 18 ? '产检假' : '' }}
            {{ scope.row.attendanceRecord[3].adtStatu == 19 ? '流产假' : '' }}
            {{ scope.row.attendanceRecord[3].adtStatu == 20 ? '长期病假' : '' }}
            {{ scope.row.attendanceRecord[3].adtStatu == 21 ? '测试假' : '' }}
            {{ scope.row.attendanceRecord[3].adtStatu == 22 ? '补签' : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/5">
          <template #default="scope">
            {{ scope.row.attendanceRecord[4].adtStatu == 1 ? '正常' : '' }}
            {{ scope.row.attendanceRecord[4].adtStatu == 2 ? '旷工' : '' }}
            {{ scope.row.attendanceRecord[4].adtStatu == 3 ? '迟到' : '' }}
            {{ scope.row.attendanceRecord[4].adtStatu == 4 ? '早退' : '' }}
            {{ scope.row.attendanceRecord[4].adtStatu == 5 ? '外出' : '' }}
            {{ scope.row.attendanceRecord[4].adtStatu == 6 ? '出差' : '' }}
            {{ scope.row.attendanceRecord[4].adtStatu == 7 ? '年假' : '' }}
            {{ scope.row.attendanceRecord[4].adtStatu == 8 ? '事假' : '' }}
            {{ scope.row.attendanceRecord[4].adtStatu == 9 ? '病假' : '' }}
            {{ scope.row.attendanceRecord[4].adtStatu == 10 ? '婚假' : '' }}
            {{ scope.row.attendanceRecord[4].adtStatu == 11 ? '丧假' : '' }}
            {{ scope.row.attendanceRecord[4].adtStatu == 12 ? '产假' : '' }}
            {{ scope.row.attendanceRecord[4].adtStatu == 13 ? '奖励产假' : '' }}
            {{ scope.row.attendanceRecord[4].adtStatu == 14 ? '陪产假' : '' }}
            {{ scope.row.attendanceRecord[4].adtStatu == 15 ? '探亲假' : '' }}
            {{ scope.row.attendanceRecord[4].adtStatu == 16 ? '工伤假' : '' }}
            {{ scope.row.attendanceRecord[4].adtStatu == 17 ? '调休' : '' }}
            {{ scope.row.attendanceRecord[4].adtStatu == 18 ? '产检假' : '' }}
            {{ scope.row.attendanceRecord[4].adtStatu == 19 ? '流产假' : '' }}
            {{ scope.row.attendanceRecord[4].adtStatu == 20 ? '长期病假' : '' }}
            {{ scope.row.attendanceRecord[4].adtStatu == 21 ? '测试假' : '' }}
            {{ scope.row.attendanceRecord[4].adtStatu == 22 ? '补签' : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/6">
          <template #default="scope">
            {{ scope.row.attendanceRecord[5].adtStatu == 1 ? '正常' : '' }}
            {{ scope.row.attendanceRecord[5].adtStatu == 2 ? '旷工' : '' }}
            {{ scope.row.attendanceRecord[5].adtStatu == 3 ? '迟到' : '' }}
            {{ scope.row.attendanceRecord[5].adtStatu == 4 ? '早退' : '' }}
            {{ scope.row.attendanceRecord[5].adtStatu == 5 ? '外出' : '' }}
            {{ scope.row.attendanceRecord[5].adtStatu == 6 ? '出差' : '' }}
            {{ scope.row.attendanceRecord[5].adtStatu == 7 ? '年假' : '' }}
            {{ scope.row.attendanceRecord[5].adtStatu == 8 ? '事假' : '' }}
            {{ scope.row.attendanceRecord[5].adtStatu == 9 ? '病假' : '' }}
            {{ scope.row.attendanceRecord[5].adtStatu == 10 ? '婚假' : '' }}
            {{ scope.row.attendanceRecord[5].adtStatu == 11 ? '丧假' : '' }}
            {{ scope.row.attendanceRecord[5].adtStatu == 12 ? '产假' : '' }}
            {{ scope.row.attendanceRecord[5].adtStatu == 13 ? '奖励产假' : '' }}
            {{ scope.row.attendanceRecord[5].adtStatu == 14 ? '陪产假' : '' }}
            {{ scope.row.attendanceRecord[5].adtStatu == 15 ? '探亲假' : '' }}
            {{ scope.row.attendanceRecord[5].adtStatu == 16 ? '工伤假' : '' }}
            {{ scope.row.attendanceRecord[5].adtStatu == 17 ? '调休' : '' }}
            {{ scope.row.attendanceRecord[5].adtStatu == 18 ? '产检假' : '' }}
            {{ scope.row.attendanceRecord[5].adtStatu == 19 ? '流产假' : '' }}
            {{ scope.row.attendanceRecord[5].adtStatu == 20 ? '长期病假' : '' }}
            {{ scope.row.attendanceRecord[5].adtStatu == 21 ? '测试假' : '' }}
            {{ scope.row.attendanceRecord[5].adtStatu == 22 ? '补签' : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/7">
          <template #default="scope">
            {{ scope.row.attendanceRecord[6].adtStatu == 1 ? '正常' : '' }}
            {{ scope.row.attendanceRecord[6].adtStatu == 2 ? '旷工' : '' }}
            {{ scope.row.attendanceRecord[6].adtStatu == 3 ? '迟到' : '' }}
            {{ scope.row.attendanceRecord[6].adtStatu == 4 ? '早退' : '' }}
            {{ scope.row.attendanceRecord[6].adtStatu == 5 ? '外出' : '' }}
            {{ scope.row.attendanceRecord[6].adtStatu == 6 ? '出差' : '' }}
            {{ scope.row.attendanceRecord[6].adtStatu == 7 ? '年假' : '' }}
            {{ scope.row.attendanceRecord[6].adtStatu == 8 ? '事假' : '' }}
            {{ scope.row.attendanceRecord[6].adtStatu == 9 ? '病假' : '' }}
            {{ scope.row.attendanceRecord[6].adtStatu == 10 ? '婚假' : '' }}
            {{ scope.row.attendanceRecord[6].adtStatu == 11 ? '丧假' : '' }}
            {{ scope.row.attendanceRecord[6].adtStatu == 12 ? '产假' : '' }}
            {{ scope.row.attendanceRecord[6].adtStatu == 13 ? '奖励产假' : '' }}
            {{ scope.row.attendanceRecord[6].adtStatu == 14 ? '陪产假' : '' }}
            {{ scope.row.attendanceRecord[6].adtStatu == 15 ? '探亲假' : '' }}
            {{ scope.row.attendanceRecord[6].adtStatu == 16 ? '工伤假' : '' }}
            {{ scope.row.attendanceRecord[6].adtStatu == 17 ? '调休' : '' }}
            {{ scope.row.attendanceRecord[6].adtStatu == 18 ? '产检假' : '' }}
            {{ scope.row.attendanceRecord[6].adtStatu == 19 ? '流产假' : '' }}
            {{ scope.row.attendanceRecord[6].adtStatu == 20 ? '长期病假' : '' }}
            {{ scope.row.attendanceRecord[6].adtStatu == 21 ? '测试假' : '' }}
            {{ scope.row.attendanceRecord[6].adtStatu == 22 ? '补签' : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/8">
          <template #default="scope">
            {{ scope.row.attendanceRecord[7].adtStatu == 1 ? '正常' : '' }}
            {{ scope.row.attendanceRecord[7].adtStatu == 2 ? '旷工' : '' }}
            {{ scope.row.attendanceRecord[7].adtStatu == 3 ? '迟到' : '' }}
            {{ scope.row.attendanceRecord[7].adtStatu == 4 ? '早退' : '' }}
            {{ scope.row.attendanceRecord[7].adtStatu == 5 ? '外出' : '' }}
            {{ scope.row.attendanceRecord[7].adtStatu == 6 ? '出差' : '' }}
            {{ scope.row.attendanceRecord[7].adtStatu == 7 ? '年假' : '' }}
            {{ scope.row.attendanceRecord[7].adtStatu == 8 ? '事假' : '' }}
            {{ scope.row.attendanceRecord[7].adtStatu == 9 ? '病假' : '' }}
            {{ scope.row.attendanceRecord[7].adtStatu == 10 ? '婚假' : '' }}
            {{ scope.row.attendanceRecord[7].adtStatu == 11 ? '丧假' : '' }}
            {{ scope.row.attendanceRecord[7].adtStatu == 12 ? '产假' : '' }}
            {{ scope.row.attendanceRecord[7].adtStatu == 13 ? '奖励产假' : '' }}
            {{ scope.row.attendanceRecord[7].adtStatu == 14 ? '陪产假' : '' }}
            {{ scope.row.attendanceRecord[7].adtStatu == 15 ? '探亲假' : '' }}
            {{ scope.row.attendanceRecord[7].adtStatu == 16 ? '工伤假' : '' }}
            {{ scope.row.attendanceRecord[7].adtStatu == 17 ? '调休' : '' }}
            {{ scope.row.attendanceRecord[7].adtStatu == 18 ? '产检假' : '' }}
            {{ scope.row.attendanceRecord[7].adtStatu == 19 ? '流产假' : '' }}
            {{ scope.row.attendanceRecord[7].adtStatu == 20 ? '长期病假' : '' }}
            {{ scope.row.attendanceRecord[7].adtStatu == 21 ? '测试假' : '' }}
            {{ scope.row.attendanceRecord[7].adtStatu == 22 ? '补签' : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/9">
          <template #default="scope">
            {{ scope.row.attendanceRecord[8].adtStatu == 1 ? '正常' : '' }}
            {{ scope.row.attendanceRecord[8].adtStatu == 2 ? '旷工' : '' }}
            {{ scope.row.attendanceRecord[8].adtStatu == 3 ? '迟到' : '' }}
            {{ scope.row.attendanceRecord[8].adtStatu == 4 ? '早退' : '' }}
            {{ scope.row.attendanceRecord[8].adtStatu == 5 ? '外出' : '' }}
            {{ scope.row.attendanceRecord[8].adtStatu == 6 ? '出差' : '' }}
            {{ scope.row.attendanceRecord[8].adtStatu == 7 ? '年假' : '' }}
            {{ scope.row.attendanceRecord[8].adtStatu == 8 ? '事假' : '' }}
            {{ scope.row.attendanceRecord[8].adtStatu == 9 ? '病假' : '' }}
            {{ scope.row.attendanceRecord[8].adtStatu == 10 ? '婚假' : '' }}
            {{ scope.row.attendanceRecord[8].adtStatu == 11 ? '丧假' : '' }}
            {{ scope.row.attendanceRecord[8].adtStatu == 12 ? '产假' : '' }}
            {{ scope.row.attendanceRecord[8].adtStatu == 13 ? '奖励产假' : '' }}
            {{ scope.row.attendanceRecord[8].adtStatu == 14 ? '陪产假' : '' }}
            {{ scope.row.attendanceRecord[8].adtStatu == 15 ? '探亲假' : '' }}
            {{ scope.row.attendanceRecord[8].adtStatu == 16 ? '工伤假' : '' }}
            {{ scope.row.attendanceRecord[8].adtStatu == 17 ? '调休' : '' }}
            {{ scope.row.attendanceRecord[8].adtStatu == 18 ? '产检假' : '' }}
            {{ scope.row.attendanceRecord[8].adtStatu == 19 ? '流产假' : '' }}
            {{ scope.row.attendanceRecord[8].adtStatu == 20 ? '长期病假' : '' }}
            {{ scope.row.attendanceRecord[8].adtStatu == 21 ? '测试假' : '' }}
            {{ scope.row.attendanceRecord[8].adtStatu == 22 ? '补签' : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/10">
          <template #default="scope">
            {{ scope.row.attendanceRecord[9].adtStatu == 1 ? '正常' : '' }}
            {{ scope.row.attendanceRecord[9].adtStatu == 2 ? '旷工' : '' }}
            {{ scope.row.attendanceRecord[9].adtStatu == 3 ? '迟到' : '' }}
            {{ scope.row.attendanceRecord[9].adtStatu == 4 ? '早退' : '' }}
            {{ scope.row.attendanceRecord[9].adtStatu == 5 ? '外出' : '' }}
            {{ scope.row.attendanceRecord[9].adtStatu == 6 ? '出差' : '' }}
            {{ scope.row.attendanceRecord[9].adtStatu == 7 ? '年假' : '' }}
            {{ scope.row.attendanceRecord[9].adtStatu == 8 ? '事假' : '' }}
            {{ scope.row.attendanceRecord[9].adtStatu == 9 ? '病假' : '' }}
            {{ scope.row.attendanceRecord[9].adtStatu == 10 ? '婚假' : '' }}
            {{ scope.row.attendanceRecord[9].adtStatu == 11 ? '丧假' : '' }}
            {{ scope.row.attendanceRecord[9].adtStatu == 12 ? '产假' : '' }}
            {{ scope.row.attendanceRecord[9].adtStatu == 13 ? '奖励产假' : '' }}
            {{ scope.row.attendanceRecord[9].adtStatu == 14 ? '陪产假' : '' }}
            {{ scope.row.attendanceRecord[9].adtStatu == 15 ? '探亲假' : '' }}
            {{ scope.row.attendanceRecord[9].adtStatu == 16 ? '工伤假' : '' }}
            {{ scope.row.attendanceRecord[9].adtStatu == 17 ? '调休' : '' }}
            {{ scope.row.attendanceRecord[9].adtStatu == 18 ? '产检假' : '' }}
            {{ scope.row.attendanceRecord[9].adtStatu == 19 ? '流产假' : '' }}
            {{ scope.row.attendanceRecord[9].adtStatu == 20 ? '长期病假' : '' }}
            {{ scope.row.attendanceRecord[9].adtStatu == 21 ? '测试假' : '' }}
            {{ scope.row.attendanceRecord[9].adtStatu == 22 ? '补签' : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/11">
          <template #default="scope">
            {{ scope.row.attendanceRecord[10].adtStatu == 1 ? '正常' : '' }}
            {{ scope.row.attendanceRecord[10].adtStatu == 2 ? '旷工' : '' }}
            {{ scope.row.attendanceRecord[10].adtStatu == 3 ? '迟到' : '' }}
            {{ scope.row.attendanceRecord[10].adtStatu == 4 ? '早退' : '' }}
            {{ scope.row.attendanceRecord[10].adtStatu == 5 ? '外出' : '' }}
            {{ scope.row.attendanceRecord[10].adtStatu == 6 ? '出差' : '' }}
            {{ scope.row.attendanceRecord[10].adtStatu == 7 ? '年假' : '' }}
            {{ scope.row.attendanceRecord[10].adtStatu == 8 ? '事假' : '' }}
            {{ scope.row.attendanceRecord[10].adtStatu == 9 ? '病假' : '' }}
            {{ scope.row.attendanceRecord[10].adtStatu == 10 ? '婚假' : '' }}
            {{ scope.row.attendanceRecord[10].adtStatu == 11 ? '丧假' : '' }}
            {{ scope.row.attendanceRecord[10].adtStatu == 12 ? '产假' : '' }}
            {{
              scope.row.attendanceRecord[10].adtStatu == 13 ? '奖励产假' : ''
            }}
            {{ scope.row.attendanceRecord[10].adtStatu == 14 ? '陪产假' : '' }}
            {{ scope.row.attendanceRecord[10].adtStatu == 15 ? '探亲假' : '' }}
            {{ scope.row.attendanceRecord[10].adtStatu == 16 ? '工伤假' : '' }}
            {{ scope.row.attendanceRecord[10].adtStatu == 17 ? '调休' : '' }}
            {{ scope.row.attendanceRecord[10].adtStatu == 18 ? '产检假' : '' }}
            {{ scope.row.attendanceRecord[10].adtStatu == 19 ? '流产假' : '' }}
            {{
              scope.row.attendanceRecord[10].adtStatu == 20 ? '长期病假' : ''
            }}
            {{ scope.row.attendanceRecord[10].adtStatu == 21 ? '测试假' : '' }}
            {{ scope.row.attendanceRecord[10].adtStatu == 22 ? '补签' : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/12">
          <template #default="scope">
            {{ scope.row.attendanceRecord[11].adtStatu == 1 ? '正常' : '' }}
            {{ scope.row.attendanceRecord[11].adtStatu == 2 ? '旷工' : '' }}
            {{ scope.row.attendanceRecord[11].adtStatu == 3 ? '迟到' : '' }}
            {{ scope.row.attendanceRecord[11].adtStatu == 4 ? '早退' : '' }}
            {{ scope.row.attendanceRecord[11].adtStatu == 5 ? '外出' : '' }}
            {{ scope.row.attendanceRecord[11].adtStatu == 6 ? '出差' : '' }}
            {{ scope.row.attendanceRecord[11].adtStatu == 7 ? '年假' : '' }}
            {{ scope.row.attendanceRecord[11].adtStatu == 8 ? '事假' : '' }}
            {{ scope.row.attendanceRecord[11].adtStatu == 9 ? '病假' : '' }}
            {{ scope.row.attendanceRecord[11].adtStatu == 10 ? '婚假' : '' }}
            {{ scope.row.attendanceRecord[11].adtStatu == 11 ? '丧假' : '' }}
            {{ scope.row.attendanceRecord[11].adtStatu == 12 ? '产假' : '' }}
            {{
              scope.row.attendanceRecord[11].adtStatu == 13 ? '奖励产假' : ''
            }}
            {{ scope.row.attendanceRecord[11].adtStatu == 14 ? '陪产假' : '' }}
            {{ scope.row.attendanceRecord[11].adtStatu == 15 ? '探亲假' : '' }}
            {{ scope.row.attendanceRecord[11].adtStatu == 16 ? '工伤假' : '' }}
            {{ scope.row.attendanceRecord[11].adtStatu == 17 ? '调休' : '' }}
            {{ scope.row.attendanceRecord[11].adtStatu == 18 ? '产检假' : '' }}
            {{ scope.row.attendanceRecord[11].adtStatu == 19 ? '流产假' : '' }}
            {{
              scope.row.attendanceRecord[11].adtStatu == 20 ? '长期病假' : ''
            }}
            {{ scope.row.attendanceRecord[11].adtStatu == 21 ? '测试假' : '' }}
            {{ scope.row.attendanceRecord[11].adtStatu == 22 ? '补签' : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/13">
          <template #default="scope">
            {{ scope.row.attendanceRecord[12].adtStatu == 1 ? '正常' : '' }}
            {{ scope.row.attendanceRecord[12].adtStatu == 2 ? '旷工' : '' }}
            {{ scope.row.attendanceRecord[12].adtStatu == 3 ? '迟到' : '' }}
            {{ scope.row.attendanceRecord[12].adtStatu == 4 ? '早退' : '' }}
            {{ scope.row.attendanceRecord[12].adtStatu == 5 ? '外出' : '' }}
            {{ scope.row.attendanceRecord[12].adtStatu == 6 ? '出差' : '' }}
            {{ scope.row.attendanceRecord[12].adtStatu == 7 ? '年假' : '' }}
            {{ scope.row.attendanceRecord[12].adtStatu == 8 ? '事假' : '' }}
            {{ scope.row.attendanceRecord[12].adtStatu == 9 ? '病假' : '' }}
            {{ scope.row.attendanceRecord[12].adtStatu == 10 ? '婚假' : '' }}
            {{ scope.row.attendanceRecord[12].adtStatu == 11 ? '丧假' : '' }}
            {{ scope.row.attendanceRecord[12].adtStatu == 12 ? '产假' : '' }}
            {{
              scope.row.attendanceRecord[12].adtStatu == 13 ? '奖励产假' : ''
            }}
            {{ scope.row.attendanceRecord[12].adtStatu == 14 ? '陪产假' : '' }}
            {{ scope.row.attendanceRecord[12].adtStatu == 15 ? '探亲假' : '' }}
            {{ scope.row.attendanceRecord[12].adtStatu == 16 ? '工伤假' : '' }}
            {{ scope.row.attendanceRecord[12].adtStatu == 17 ? '调休' : '' }}
            {{ scope.row.attendanceRecord[12].adtStatu == 18 ? '产检假' : '' }}
            {{ scope.row.attendanceRecord[12].adtStatu == 19 ? '流产假' : '' }}
            {{
              scope.row.attendanceRecord[12].adtStatu == 20 ? '长期病假' : ''
            }}
            {{ scope.row.attendanceRecord[12].adtStatu == 21 ? '测试假' : '' }}
            {{ scope.row.attendanceRecord[12].adtStatu == 22 ? '补签' : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/14">
          <template #default="scope">
            {{ scope.row.attendanceRecord[13].adtStatu == 1 ? '正常' : '' }}
            {{ scope.row.attendanceRecord[13].adtStatu == 2 ? '旷工' : '' }}
            {{ scope.row.attendanceRecord[13].adtStatu == 3 ? '迟到' : '' }}
            {{ scope.row.attendanceRecord[13].adtStatu == 4 ? '早退' : '' }}
            {{ scope.row.attendanceRecord[13].adtStatu == 5 ? '外出' : '' }}
            {{ scope.row.attendanceRecord[13].adtStatu == 6 ? '出差' : '' }}
            {{ scope.row.attendanceRecord[13].adtStatu == 7 ? '年假' : '' }}
            {{ scope.row.attendanceRecord[13].adtStatu == 8 ? '事假' : '' }}
            {{ scope.row.attendanceRecord[13].adtStatu == 9 ? '病假' : '' }}
            {{ scope.row.attendanceRecord[13].adtStatu == 10 ? '婚假' : '' }}
            {{ scope.row.attendanceRecord[13].adtStatu == 11 ? '丧假' : '' }}
            {{ scope.row.attendanceRecord[13].adtStatu == 12 ? '产假' : '' }}
            {{
              scope.row.attendanceRecord[13].adtStatu == 13 ? '奖励产假' : ''
            }}
            {{ scope.row.attendanceRecord[13].adtStatu == 14 ? '陪产假' : '' }}
            {{ scope.row.attendanceRecord[13].adtStatu == 15 ? '探亲假' : '' }}
            {{ scope.row.attendanceRecord[13].adtStatu == 16 ? '工伤假' : '' }}
            {{ scope.row.attendanceRecord[13].adtStatu == 17 ? '调休' : '' }}
            {{ scope.row.attendanceRecord[13].adtStatu == 18 ? '产检假' : '' }}
            {{ scope.row.attendanceRecord[13].adtStatu == 19 ? '流产假' : '' }}
            {{
              scope.row.attendanceRecord[13].adtStatu == 20 ? '长期病假' : ''
            }}
            {{ scope.row.attendanceRecord[13].adtStatu == 21 ? '测试假' : '' }}
            {{ scope.row.attendanceRecord[13].adtStatu == 22 ? '补签' : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/15">
          <template #default="scope">
            {{ scope.row.attendanceRecord[14].adtStatu == 1 ? '正常' : '' }}
            {{ scope.row.attendanceRecord[14].adtStatu == 2 ? '旷工' : '' }}
            {{ scope.row.attendanceRecord[14].adtStatu == 3 ? '迟到' : '' }}
            {{ scope.row.attendanceRecord[14].adtStatu == 4 ? '早退' : '' }}
            {{ scope.row.attendanceRecord[14].adtStatu == 5 ? '外出' : '' }}
            {{ scope.row.attendanceRecord[14].adtStatu == 6 ? '出差' : '' }}
            {{ scope.row.attendanceRecord[14].adtStatu == 7 ? '年假' : '' }}
            {{ scope.row.attendanceRecord[14].adtStatu == 8 ? '事假' : '' }}
            {{ scope.row.attendanceRecord[14].adtStatu == 9 ? '病假' : '' }}
            {{ scope.row.attendanceRecord[14].adtStatu == 10 ? '婚假' : '' }}
            {{ scope.row.attendanceRecord[14].adtStatu == 11 ? '丧假' : '' }}
            {{ scope.row.attendanceRecord[14].adtStatu == 12 ? '产假' : '' }}
            {{
              scope.row.attendanceRecord[14].adtStatu == 13 ? '奖励产假' : ''
            }}
            {{ scope.row.attendanceRecord[14].adtStatu == 14 ? '陪产假' : '' }}
            {{ scope.row.attendanceRecord[14].adtStatu == 15 ? '探亲假' : '' }}
            {{ scope.row.attendanceRecord[14].adtStatu == 16 ? '工伤假' : '' }}
            {{ scope.row.attendanceRecord[14].adtStatu == 17 ? '调休' : '' }}
            {{ scope.row.attendanceRecord[14].adtStatu == 18 ? '产检假' : '' }}
            {{ scope.row.attendanceRecord[14].adtStatu == 19 ? '流产假' : '' }}
            {{
              scope.row.attendanceRecord[14].adtStatu == 20 ? '长期病假' : ''
            }}
            {{ scope.row.attendanceRecord[14].adtStatu == 21 ? '测试假' : '' }}
            {{ scope.row.attendanceRecord[14].adtStatu == 22 ? '补签' : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/16">
          <template #default="scope">
            {{ scope.row.attendanceRecord[15].adtStatu == 1 ? '正常' : '' }}
            {{ scope.row.attendanceRecord[15].adtStatu == 2 ? '旷工' : '' }}
            {{ scope.row.attendanceRecord[15].adtStatu == 3 ? '迟到' : '' }}
            {{ scope.row.attendanceRecord[15].adtStatu == 4 ? '早退' : '' }}
            {{ scope.row.attendanceRecord[15].adtStatu == 5 ? '外出' : '' }}
            {{ scope.row.attendanceRecord[15].adtStatu == 6 ? '出差' : '' }}
            {{ scope.row.attendanceRecord[15].adtStatu == 7 ? '年假' : '' }}
            {{ scope.row.attendanceRecord[15].adtStatu == 8 ? '事假' : '' }}
            {{ scope.row.attendanceRecord[15].adtStatu == 9 ? '病假' : '' }}
            {{ scope.row.attendanceRecord[15].adtStatu == 10 ? '婚假' : '' }}
            {{ scope.row.attendanceRecord[15].adtStatu == 11 ? '丧假' : '' }}
            {{ scope.row.attendanceRecord[15].adtStatu == 12 ? '产假' : '' }}
            {{
              scope.row.attendanceRecord[15].adtStatu == 13 ? '奖励产假' : ''
            }}
            {{ scope.row.attendanceRecord[15].adtStatu == 14 ? '陪产假' : '' }}
            {{ scope.row.attendanceRecord[15].adtStatu == 15 ? '探亲假' : '' }}
            {{ scope.row.attendanceRecord[15].adtStatu == 16 ? '工伤假' : '' }}
            {{ scope.row.attendanceRecord[15].adtStatu == 17 ? '调休' : '' }}
            {{ scope.row.attendanceRecord[15].adtStatu == 18 ? '产检假' : '' }}
            {{ scope.row.attendanceRecord[15].adtStatu == 19 ? '流产假' : '' }}
            {{
              scope.row.attendanceRecord[15].adtStatu == 20 ? '长期病假' : ''
            }}
            {{ scope.row.attendanceRecord[15].adtStatu == 21 ? '测试假' : '' }}
            {{ scope.row.attendanceRecord[15].adtStatu == 22 ? '补签' : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/17">
          <template #default="scope">
            {{ scope.row.attendanceRecord[16].adtStatu == 1 ? '正常' : '' }}
            {{ scope.row.attendanceRecord[16].adtStatu == 2 ? '旷工' : '' }}
            {{ scope.row.attendanceRecord[16].adtStatu == 3 ? '迟到' : '' }}
            {{ scope.row.attendanceRecord[16].adtStatu == 4 ? '早退' : '' }}
            {{ scope.row.attendanceRecord[16].adtStatu == 5 ? '外出' : '' }}
            {{ scope.row.attendanceRecord[16].adtStatu == 6 ? '出差' : '' }}
            {{ scope.row.attendanceRecord[16].adtStatu == 7 ? '年假' : '' }}
            {{ scope.row.attendanceRecord[16].adtStatu == 8 ? '事假' : '' }}
            {{ scope.row.attendanceRecord[16].adtStatu == 9 ? '病假' : '' }}
            {{ scope.row.attendanceRecord[16].adtStatu == 10 ? '婚假' : '' }}
            {{ scope.row.attendanceRecord[16].adtStatu == 11 ? '丧假' : '' }}
            {{ scope.row.attendanceRecord[16].adtStatu == 12 ? '产假' : '' }}
            {{
              scope.row.attendanceRecord[16].adtStatu == 13 ? '奖励产假' : ''
            }}
            {{ scope.row.attendanceRecord[16].adtStatu == 14 ? '陪产假' : '' }}
            {{ scope.row.attendanceRecord[16].adtStatu == 15 ? '探亲假' : '' }}
            {{ scope.row.attendanceRecord[16].adtStatu == 16 ? '工伤假' : '' }}
            {{ scope.row.attendanceRecord[16].adtStatu == 17 ? '调休' : '' }}
            {{ scope.row.attendanceRecord[16].adtStatu == 18 ? '产检假' : '' }}
            {{ scope.row.attendanceRecord[16].adtStatu == 19 ? '流产假' : '' }}
            {{
              scope.row.attendanceRecord[16].adtStatu == 20 ? '长期病假' : ''
            }}
            {{ scope.row.attendanceRecord[16].adtStatu == 21 ? '测试假' : '' }}
            {{ scope.row.attendanceRecord[16].adtStatu == 22 ? '补签' : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/18">
          <template #default="scope">
            {{ scope.row.attendanceRecord[17].adtStatu == 1 ? '正常' : '' }}
            {{ scope.row.attendanceRecord[17].adtStatu == 2 ? '旷工' : '' }}
            {{ scope.row.attendanceRecord[17].adtStatu == 3 ? '迟到' : '' }}
            {{ scope.row.attendanceRecord[17].adtStatu == 4 ? '早退' : '' }}
            {{ scope.row.attendanceRecord[17].adtStatu == 5 ? '外出' : '' }}
            {{ scope.row.attendanceRecord[17].adtStatu == 6 ? '出差' : '' }}
            {{ scope.row.attendanceRecord[17].adtStatu == 7 ? '年假' : '' }}
            {{ scope.row.attendanceRecord[17].adtStatu == 8 ? '事假' : '' }}
            {{ scope.row.attendanceRecord[17].adtStatu == 9 ? '病假' : '' }}
            {{ scope.row.attendanceRecord[17].adtStatu == 10 ? '婚假' : '' }}
            {{ scope.row.attendanceRecord[17].adtStatu == 11 ? '丧假' : '' }}
            {{ scope.row.attendanceRecord[17].adtStatu == 12 ? '产假' : '' }}
            {{
              scope.row.attendanceRecord[17].adtStatu == 13 ? '奖励产假' : ''
            }}
            {{ scope.row.attendanceRecord[17].adtStatu == 14 ? '陪产假' : '' }}
            {{ scope.row.attendanceRecord[17].adtStatu == 15 ? '探亲假' : '' }}
            {{ scope.row.attendanceRecord[17].adtStatu == 16 ? '工伤假' : '' }}
            {{ scope.row.attendanceRecord[17].adtStatu == 17 ? '调休' : '' }}
            {{ scope.row.attendanceRecord[17].adtStatu == 18 ? '产检假' : '' }}
            {{ scope.row.attendanceRecord[17].adtStatu == 19 ? '流产假' : '' }}
            {{
              scope.row.attendanceRecord[17].adtStatu == 20 ? '长期病假' : ''
            }}
            {{ scope.row.attendanceRecord[17].adtStatu == 21 ? '测试假' : '' }}
            {{ scope.row.attendanceRecord[17].adtStatu == 22 ? '补签' : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/19">
          <template #default="scope">
            {{ scope.row.attendanceRecord[18].adtStatu == 1 ? '正常' : '' }}
            {{ scope.row.attendanceRecord[18].adtStatu == 2 ? '旷工' : '' }}
            {{ scope.row.attendanceRecord[18].adtStatu == 3 ? '迟到' : '' }}
            {{ scope.row.attendanceRecord[18].adtStatu == 4 ? '早退' : '' }}
            {{ scope.row.attendanceRecord[18].adtStatu == 5 ? '外出' : '' }}
            {{ scope.row.attendanceRecord[18].adtStatu == 6 ? '出差' : '' }}
            {{ scope.row.attendanceRecord[18].adtStatu == 7 ? '年假' : '' }}
            {{ scope.row.attendanceRecord[18].adtStatu == 8 ? '事假' : '' }}
            {{ scope.row.attendanceRecord[18].adtStatu == 9 ? '病假' : '' }}
            {{ scope.row.attendanceRecord[18].adtStatu == 10 ? '婚假' : '' }}
            {{ scope.row.attendanceRecord[18].adtStatu == 11 ? '丧假' : '' }}
            {{ scope.row.attendanceRecord[18].adtStatu == 12 ? '产假' : '' }}
            {{
              scope.row.attendanceRecord[18].adtStatu == 13 ? '奖励产假' : ''
            }}
            {{ scope.row.attendanceRecord[18].adtStatu == 14 ? '陪产假' : '' }}
            {{ scope.row.attendanceRecord[18].adtStatu == 15 ? '探亲假' : '' }}
            {{ scope.row.attendanceRecord[18].adtStatu == 16 ? '工伤假' : '' }}
            {{ scope.row.attendanceRecord[18].adtStatu == 17 ? '调休' : '' }}
            {{ scope.row.attendanceRecord[18].adtStatu == 18 ? '产检假' : '' }}
            {{ scope.row.attendanceRecord[18].adtStatu == 19 ? '流产假' : '' }}
            {{
              scope.row.attendanceRecord[18].adtStatu == 20 ? '长期病假' : ''
            }}
            {{ scope.row.attendanceRecord[18].adtStatu == 21 ? '测试假' : '' }}
            {{ scope.row.attendanceRecord[18].adtStatu == 22 ? '补签' : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/20">
          <template #default="scope">
            {{ scope.row.attendanceRecord[19].adtStatu == 1 ? '正常' : '' }}
            {{ scope.row.attendanceRecord[19].adtStatu == 2 ? '旷工' : '' }}
            {{ scope.row.attendanceRecord[19].adtStatu == 3 ? '迟到' : '' }}
            {{ scope.row.attendanceRecord[19].adtStatu == 4 ? '早退' : '' }}
            {{ scope.row.attendanceRecord[19].adtStatu == 5 ? '外出' : '' }}
            {{ scope.row.attendanceRecord[19].adtStatu == 6 ? '出差' : '' }}
            {{ scope.row.attendanceRecord[19].adtStatu == 7 ? '年假' : '' }}
            {{ scope.row.attendanceRecord[19].adtStatu == 8 ? '事假' : '' }}
            {{ scope.row.attendanceRecord[19].adtStatu == 9 ? '病假' : '' }}
            {{ scope.row.attendanceRecord[19].adtStatu == 10 ? '婚假' : '' }}
            {{ scope.row.attendanceRecord[19].adtStatu == 11 ? '丧假' : '' }}
            {{ scope.row.attendanceRecord[19].adtStatu == 12 ? '产假' : '' }}
            {{
              scope.row.attendanceRecord[19].adtStatu == 13 ? '奖励产假' : ''
            }}
            {{ scope.row.attendanceRecord[19].adtStatu == 14 ? '陪产假' : '' }}
            {{ scope.row.attendanceRecord[19].adtStatu == 15 ? '探亲假' : '' }}
            {{ scope.row.attendanceRecord[19].adtStatu == 16 ? '工伤假' : '' }}
            {{ scope.row.attendanceRecord[19].adtStatu == 17 ? '调休' : '' }}
            {{ scope.row.attendanceRecord[19].adtStatu == 18 ? '产检假' : '' }}
            {{ scope.row.attendanceRecord[19].adtStatu == 19 ? '流产假' : '' }}
            {{
              scope.row.attendanceRecord[19].adtStatu == 20 ? '长期病假' : ''
            }}
            {{ scope.row.attendanceRecord[19].adtStatu == 21 ? '测试假' : '' }}
            {{ scope.row.attendanceRecord[19].adtStatu == 22 ? '补签' : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/21">
          <template #default="scope">
            {{ scope.row.attendanceRecord[20].adtStatu == 1 ? '正常' : '' }}
            {{ scope.row.attendanceRecord[20].adtStatu == 2 ? '旷工' : '' }}
            {{ scope.row.attendanceRecord[20].adtStatu == 3 ? '迟到' : '' }}
            {{ scope.row.attendanceRecord[20].adtStatu == 4 ? '早退' : '' }}
            {{ scope.row.attendanceRecord[20].adtStatu == 5 ? '外出' : '' }}
            {{ scope.row.attendanceRecord[20].adtStatu == 6 ? '出差' : '' }}
            {{ scope.row.attendanceRecord[20].adtStatu == 7 ? '年假' : '' }}
            {{ scope.row.attendanceRecord[20].adtStatu == 8 ? '事假' : '' }}
            {{ scope.row.attendanceRecord[20].adtStatu == 9 ? '病假' : '' }}
            {{ scope.row.attendanceRecord[20].adtStatu == 10 ? '婚假' : '' }}
            {{ scope.row.attendanceRecord[20].adtStatu == 11 ? '丧假' : '' }}
            {{ scope.row.attendanceRecord[20].adtStatu == 12 ? '产假' : '' }}
            {{
              scope.row.attendanceRecord[20].adtStatu == 13 ? '奖励产假' : ''
            }}
            {{ scope.row.attendanceRecord[20].adtStatu == 14 ? '陪产假' : '' }}
            {{ scope.row.attendanceRecord[20].adtStatu == 15 ? '探亲假' : '' }}
            {{ scope.row.attendanceRecord[20].adtStatu == 16 ? '工伤假' : '' }}
            {{ scope.row.attendanceRecord[20].adtStatu == 17 ? '调休' : '' }}
            {{ scope.row.attendanceRecord[20].adtStatu == 18 ? '产检假' : '' }}
            {{ scope.row.attendanceRecord[20].adtStatu == 19 ? '流产假' : '' }}
            {{
              scope.row.attendanceRecord[20].adtStatu == 20 ? '长期病假' : ''
            }}
            {{ scope.row.attendanceRecord[20].adtStatu == 21 ? '测试假' : '' }}
            {{ scope.row.attendanceRecord[20].adtStatu == 22 ? '补签' : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/22">
          <template #default="scope">
            {{ scope.row.attendanceRecord[21].adtStatu == 1 ? '正常' : '' }}
            {{ scope.row.attendanceRecord[21].adtStatu == 2 ? '旷工' : '' }}
            {{ scope.row.attendanceRecord[21].adtStatu == 3 ? '迟到' : '' }}
            {{ scope.row.attendanceRecord[21].adtStatu == 4 ? '早退' : '' }}
            {{ scope.row.attendanceRecord[21].adtStatu == 5 ? '外出' : '' }}
            {{ scope.row.attendanceRecord[21].adtStatu == 6 ? '出差' : '' }}
            {{ scope.row.attendanceRecord[21].adtStatu == 7 ? '年假' : '' }}
            {{ scope.row.attendanceRecord[21].adtStatu == 8 ? '事假' : '' }}
            {{ scope.row.attendanceRecord[21].adtStatu == 9 ? '病假' : '' }}
            {{ scope.row.attendanceRecord[21].adtStatu == 10 ? '婚假' : '' }}
            {{ scope.row.attendanceRecord[21].adtStatu == 11 ? '丧假' : '' }}
            {{ scope.row.attendanceRecord[21].adtStatu == 12 ? '产假' : '' }}
            {{
              scope.row.attendanceRecord[21].adtStatu == 13 ? '奖励产假' : ''
            }}
            {{ scope.row.attendanceRecord[21].adtStatu == 14 ? '陪产假' : '' }}
            {{ scope.row.attendanceRecord[21].adtStatu == 15 ? '探亲假' : '' }}
            {{ scope.row.attendanceRecord[21].adtStatu == 16 ? '工伤假' : '' }}
            {{ scope.row.attendanceRecord[21].adtStatu == 17 ? '调休' : '' }}
            {{ scope.row.attendanceRecord[21].adtStatu == 18 ? '产检假' : '' }}
            {{ scope.row.attendanceRecord[21].adtStatu == 19 ? '流产假' : '' }}
            {{
              scope.row.attendanceRecord[21].adtStatu == 20 ? '长期病假' : ''
            }}
            {{ scope.row.attendanceRecord[21].adtStatu == 21 ? '测试假' : '' }}
            {{ scope.row.attendanceRecord[21].adtStatu == 22 ? '补签' : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/23">
          <template #default="scope">
            {{ scope.row.attendanceRecord[22].adtStatu == 1 ? '正常' : '' }}
            {{ scope.row.attendanceRecord[22].adtStatu == 2 ? '旷工' : '' }}
            {{ scope.row.attendanceRecord[22].adtStatu == 3 ? '迟到' : '' }}
            {{ scope.row.attendanceRecord[22].adtStatu == 4 ? '早退' : '' }}
            {{ scope.row.attendanceRecord[22].adtStatu == 5 ? '外出' : '' }}
            {{ scope.row.attendanceRecord[22].adtStatu == 6 ? '出差' : '' }}
            {{ scope.row.attendanceRecord[22].adtStatu == 7 ? '年假' : '' }}
            {{ scope.row.attendanceRecord[22].adtStatu == 8 ? '事假' : '' }}
            {{ scope.row.attendanceRecord[22].adtStatu == 9 ? '病假' : '' }}
            {{ scope.row.attendanceRecord[22].adtStatu == 10 ? '婚假' : '' }}
            {{ scope.row.attendanceRecord[22].adtStatu == 11 ? '丧假' : '' }}
            {{ scope.row.attendanceRecord[22].adtStatu == 12 ? '产假' : '' }}
            {{
              scope.row.attendanceRecord[22].adtStatu == 13 ? '奖励产假' : ''
            }}
            {{ scope.row.attendanceRecord[22].adtStatu == 14 ? '陪产假' : '' }}
            {{ scope.row.attendanceRecord[22].adtStatu == 15 ? '探亲假' : '' }}
            {{ scope.row.attendanceRecord[22].adtStatu == 16 ? '工伤假' : '' }}
            {{ scope.row.attendanceRecord[22].adtStatu == 17 ? '调休' : '' }}
            {{ scope.row.attendanceRecord[22].adtStatu == 18 ? '产检假' : '' }}
            {{ scope.row.attendanceRecord[22].adtStatu == 19 ? '流产假' : '' }}
            {{
              scope.row.attendanceRecord[22].adtStatu == 20 ? '长期病假' : ''
            }}
            {{ scope.row.attendanceRecord[22].adtStatu == 21 ? '测试假' : '' }}
            {{ scope.row.attendanceRecord[22].adtStatu == 22 ? '补签' : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/24">
          <template #default="scope">
            {{ scope.row.attendanceRecord[23].adtStatu == 1 ? '正常' : '' }}
            {{ scope.row.attendanceRecord[23].adtStatu == 2 ? '旷工' : '' }}
            {{ scope.row.attendanceRecord[23].adtStatu == 3 ? '迟到' : '' }}
            {{ scope.row.attendanceRecord[23].adtStatu == 4 ? '早退' : '' }}
            {{ scope.row.attendanceRecord[23].adtStatu == 5 ? '外出' : '' }}
            {{ scope.row.attendanceRecord[23].adtStatu == 6 ? '出差' : '' }}
            {{ scope.row.attendanceRecord[23].adtStatu == 7 ? '年假' : '' }}
            {{ scope.row.attendanceRecord[23].adtStatu == 8 ? '事假' : '' }}
            {{ scope.row.attendanceRecord[23].adtStatu == 9 ? '病假' : '' }}
            {{ scope.row.attendanceRecord[23].adtStatu == 10 ? '婚假' : '' }}
            {{ scope.row.attendanceRecord[23].adtStatu == 11 ? '丧假' : '' }}
            {{ scope.row.attendanceRecord[23].adtStatu == 12 ? '产假' : '' }}
            {{
              scope.row.attendanceRecord[23].adtStatu == 13 ? '奖励产假' : ''
            }}
            {{ scope.row.attendanceRecord[23].adtStatu == 14 ? '陪产假' : '' }}
            {{ scope.row.attendanceRecord[23].adtStatu == 15 ? '探亲假' : '' }}
            {{ scope.row.attendanceRecord[23].adtStatu == 16 ? '工伤假' : '' }}
            {{ scope.row.attendanceRecord[23].adtStatu == 17 ? '调休' : '' }}
            {{ scope.row.attendanceRecord[23].adtStatu == 18 ? '产检假' : '' }}
            {{ scope.row.attendanceRecord[23].adtStatu == 19 ? '流产假' : '' }}
            {{
              scope.row.attendanceRecord[23].adtStatu == 20 ? '长期病假' : ''
            }}
            {{ scope.row.attendanceRecord[23].adtStatu == 21 ? '测试假' : '' }}
            {{ scope.row.attendanceRecord[23].adtStatu == 22 ? '补签' : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/25">
          <template #default="scope">
            {{ scope.row.attendanceRecord[24].adtStatu == 1 ? '正常' : '' }}
            {{ scope.row.attendanceRecord[24].adtStatu == 2 ? '旷工' : '' }}
            {{ scope.row.attendanceRecord[24].adtStatu == 3 ? '迟到' : '' }}
            {{ scope.row.attendanceRecord[24].adtStatu == 4 ? '早退' : '' }}
            {{ scope.row.attendanceRecord[24].adtStatu == 5 ? '外出' : '' }}
            {{ scope.row.attendanceRecord[24].adtStatu == 6 ? '出差' : '' }}
            {{ scope.row.attendanceRecord[24].adtStatu == 7 ? '年假' : '' }}
            {{ scope.row.attendanceRecord[24].adtStatu == 8 ? '事假' : '' }}
            {{ scope.row.attendanceRecord[24].adtStatu == 9 ? '病假' : '' }}
            {{ scope.row.attendanceRecord[24].adtStatu == 10 ? '婚假' : '' }}
            {{ scope.row.attendanceRecord[24].adtStatu == 11 ? '丧假' : '' }}
            {{ scope.row.attendanceRecord[24].adtStatu == 12 ? '产假' : '' }}
            {{
              scope.row.attendanceRecord[24].adtStatu == 13 ? '奖励产假' : ''
            }}
            {{ scope.row.attendanceRecord[24].adtStatu == 14 ? '陪产假' : '' }}
            {{ scope.row.attendanceRecord[24].adtStatu == 15 ? '探亲假' : '' }}
            {{ scope.row.attendanceRecord[24].adtStatu == 16 ? '工伤假' : '' }}
            {{ scope.row.attendanceRecord[24].adtStatu == 17 ? '调休' : '' }}
            {{ scope.row.attendanceRecord[24].adtStatu == 18 ? '产检假' : '' }}
            {{ scope.row.attendanceRecord[24].adtStatu == 19 ? '流产假' : '' }}
            {{
              scope.row.attendanceRecord[24].adtStatu == 20 ? '长期病假' : ''
            }}
            {{ scope.row.attendanceRecord[24].adtStatu == 21 ? '测试假' : '' }}
            {{ scope.row.attendanceRecord[24].adtStatu == 22 ? '补签' : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/26">
          <template #default="scope">
            {{ scope.row.attendanceRecord[25].adtStatu == 1 ? '正常' : '' }}
            {{ scope.row.attendanceRecord[25].adtStatu == 2 ? '旷工' : '' }}
            {{ scope.row.attendanceRecord[25].adtStatu == 3 ? '迟到' : '' }}
            {{ scope.row.attendanceRecord[25].adtStatu == 4 ? '早退' : '' }}
            {{ scope.row.attendanceRecord[25].adtStatu == 5 ? '外出' : '' }}
            {{ scope.row.attendanceRecord[25].adtStatu == 6 ? '出差' : '' }}
            {{ scope.row.attendanceRecord[25].adtStatu == 7 ? '年假' : '' }}
            {{ scope.row.attendanceRecord[25].adtStatu == 8 ? '事假' : '' }}
            {{ scope.row.attendanceRecord[25].adtStatu == 9 ? '病假' : '' }}
            {{ scope.row.attendanceRecord[25].adtStatu == 10 ? '婚假' : '' }}
            {{ scope.row.attendanceRecord[25].adtStatu == 11 ? '丧假' : '' }}
            {{ scope.row.attendanceRecord[25].adtStatu == 12 ? '产假' : '' }}
            {{
              scope.row.attendanceRecord[25].adtStatu == 13 ? '奖励产假' : ''
            }}
            {{ scope.row.attendanceRecord[25].adtStatu == 14 ? '陪产假' : '' }}
            {{ scope.row.attendanceRecord[25].adtStatu == 15 ? '探亲假' : '' }}
            {{ scope.row.attendanceRecord[25].adtStatu == 16 ? '工伤假' : '' }}
            {{ scope.row.attendanceRecord[25].adtStatu == 17 ? '调休' : '' }}
            {{ scope.row.attendanceRecord[25].adtStatu == 18 ? '产检假' : '' }}
            {{ scope.row.attendanceRecord[25].adtStatu == 19 ? '流产假' : '' }}
            {{
              scope.row.attendanceRecord[25].adtStatu == 20 ? '长期病假' : ''
            }}
            {{ scope.row.attendanceRecord[25].adtStatu == 21 ? '测试假' : '' }}
            {{ scope.row.attendanceRecord[25].adtStatu == 22 ? '补签' : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/27">
          <template #default="scope">
            {{ scope.row.attendanceRecord[26].adtStatu == 1 ? '正常' : '' }}
            {{ scope.row.attendanceRecord[26].adtStatu == 2 ? '旷工' : '' }}
            {{ scope.row.attendanceRecord[26].adtStatu == 3 ? '迟到' : '' }}
            {{ scope.row.attendanceRecord[26].adtStatu == 4 ? '早退' : '' }}
            {{ scope.row.attendanceRecord[26].adtStatu == 5 ? '外出' : '' }}
            {{ scope.row.attendanceRecord[26].adtStatu == 6 ? '出差' : '' }}
            {{ scope.row.attendanceRecord[26].adtStatu == 7 ? '年假' : '' }}
            {{ scope.row.attendanceRecord[26].adtStatu == 8 ? '事假' : '' }}
            {{ scope.row.attendanceRecord[26].adtStatu == 9 ? '病假' : '' }}
            {{ scope.row.attendanceRecord[26].adtStatu == 10 ? '婚假' : '' }}
            {{ scope.row.attendanceRecord[26].adtStatu == 11 ? '丧假' : '' }}
            {{ scope.row.attendanceRecord[26].adtStatu == 12 ? '产假' : '' }}
            {{
              scope.row.attendanceRecord[26].adtStatu == 13 ? '奖励产假' : ''
            }}
            {{ scope.row.attendanceRecord[26].adtStatu == 14 ? '陪产假' : '' }}
            {{ scope.row.attendanceRecord[26].adtStatu == 15 ? '探亲假' : '' }}
            {{ scope.row.attendanceRecord[26].adtStatu == 16 ? '工伤假' : '' }}
            {{ scope.row.attendanceRecord[26].adtStatu == 17 ? '调休' : '' }}
            {{ scope.row.attendanceRecord[26].adtStatu == 18 ? '产检假' : '' }}
            {{ scope.row.attendanceRecord[26].adtStatu == 19 ? '流产假' : '' }}
            {{
              scope.row.attendanceRecord[26].adtStatu == 20 ? '长期病假' : ''
            }}
            {{ scope.row.attendanceRecord[26].adtStatu == 21 ? '测试假' : '' }}
            {{ scope.row.attendanceRecord[26].adtStatu == 22 ? '补签' : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/28">
          <template #default="scope">
            {{ scope.row.attendanceRecord[27].adtStatu == 1 ? '正常' : '' }}
            {{ scope.row.attendanceRecord[27].adtStatu == 2 ? '旷工' : '' }}
            {{ scope.row.attendanceRecord[27].adtStatu == 3 ? '迟到' : '' }}
            {{ scope.row.attendanceRecord[27].adtStatu == 4 ? '早退' : '' }}
            {{ scope.row.attendanceRecord[27].adtStatu == 5 ? '外出' : '' }}
            {{ scope.row.attendanceRecord[27].adtStatu == 6 ? '出差' : '' }}
            {{ scope.row.attendanceRecord[27].adtStatu == 7 ? '年假' : '' }}
            {{ scope.row.attendanceRecord[27].adtStatu == 8 ? '事假' : '' }}
            {{ scope.row.attendanceRecord[27].adtStatu == 9 ? '病假' : '' }}
            {{ scope.row.attendanceRecord[27].adtStatu == 10 ? '婚假' : '' }}
            {{ scope.row.attendanceRecord[27].adtStatu == 11 ? '丧假' : '' }}
            {{ scope.row.attendanceRecord[27].adtStatu == 12 ? '产假' : '' }}
            {{
              scope.row.attendanceRecord[27].adtStatu == 13 ? '奖励产假' : ''
            }}
            {{ scope.row.attendanceRecord[27].adtStatu == 14 ? '陪产假' : '' }}
            {{ scope.row.attendanceRecord[27].adtStatu == 15 ? '探亲假' : '' }}
            {{ scope.row.attendanceRecord[27].adtStatu == 16 ? '工伤假' : '' }}
            {{ scope.row.attendanceRecord[27].adtStatu == 17 ? '调休' : '' }}
            {{ scope.row.attendanceRecord[27].adtStatu == 18 ? '产检假' : '' }}
            {{ scope.row.attendanceRecord[27].adtStatu == 19 ? '流产假' : '' }}
            {{
              scope.row.attendanceRecord[27].adtStatu == 20 ? '长期病假' : ''
            }}
            {{ scope.row.attendanceRecord[27].adtStatu == 21 ? '测试假' : '' }}
            {{ scope.row.attendanceRecord[27].adtStatu == 22 ? '补签' : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/29">
          <template #default="scope">
            {{ scope.row.attendanceRecord[28].adtStatu == 1 ? '正常' : '' }}
            {{ scope.row.attendanceRecord[28].adtStatu == 2 ? '旷工' : '' }}
            {{ scope.row.attendanceRecord[28].adtStatu == 3 ? '迟到' : '' }}
            {{ scope.row.attendanceRecord[28].adtStatu == 4 ? '早退' : '' }}
            {{ scope.row.attendanceRecord[28].adtStatu == 5 ? '外出' : '' }}
            {{ scope.row.attendanceRecord[28].adtStatu == 6 ? '出差' : '' }}
            {{ scope.row.attendanceRecord[28].adtStatu == 7 ? '年假' : '' }}
            {{ scope.row.attendanceRecord[28].adtStatu == 8 ? '事假' : '' }}
            {{ scope.row.attendanceRecord[28].adtStatu == 9 ? '病假' : '' }}
            {{ scope.row.attendanceRecord[28].adtStatu == 10 ? '婚假' : '' }}
            {{ scope.row.attendanceRecord[28].adtStatu == 11 ? '丧假' : '' }}
            {{ scope.row.attendanceRecord[28].adtStatu == 12 ? '产假' : '' }}
            {{
              scope.row.attendanceRecord[28].adtStatu == 13 ? '奖励产假' : ''
            }}
            {{ scope.row.attendanceRecord[28].adtStatu == 14 ? '陪产假' : '' }}
            {{ scope.row.attendanceRecord[28].adtStatu == 15 ? '探亲假' : '' }}
            {{ scope.row.attendanceRecord[28].adtStatu == 16 ? '工伤假' : '' }}
            {{ scope.row.attendanceRecord[28].adtStatu == 17 ? '调休' : '' }}
            {{ scope.row.attendanceRecord[28].adtStatu == 18 ? '产检假' : '' }}
            {{ scope.row.attendanceRecord[28].adtStatu == 19 ? '流产假' : '' }}
            {{
              scope.row.attendanceRecord[28].adtStatu == 20 ? '长期病假' : ''
            }}
            {{ scope.row.attendanceRecord[28].adtStatu == 21 ? '测试假' : '' }}
            {{ scope.row.attendanceRecord[28].adtStatu == 22 ? '补签' : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="4/30">
          <template #default="scope">
            {{ scope.row.attendanceRecord[29].adtStatu == 1 ? '正常' : '' }}
            {{ scope.row.attendanceRecord[29].adtStatu == 2 ? '旷工' : '' }}
            {{ scope.row.attendanceRecord[29].adtStatu == 3 ? '迟到' : '' }}
            {{ scope.row.attendanceRecord[29].adtStatu == 4 ? '早退' : '' }}
            {{ scope.row.attendanceRecord[29].adtStatu == 5 ? '外出' : '' }}
            {{ scope.row.attendanceRecord[29].adtStatu == 6 ? '出差' : '' }}
            {{ scope.row.attendanceRecord[29].adtStatu == 7 ? '年假' : '' }}
            {{ scope.row.attendanceRecord[29].adtStatu == 8 ? '事假' : '' }}
            {{ scope.row.attendanceRecord[29].adtStatu == 9 ? '病假' : '' }}
            {{ scope.row.attendanceRecord[29].adtStatu == 10 ? '婚假' : '' }}
            {{ scope.row.attendanceRecord[29].adtStatu == 11 ? '丧假' : '' }}
            {{ scope.row.attendanceRecord[29].adtStatu == 12 ? '产假' : '' }}
            {{
              scope.row.attendanceRecord[29].adtStatu == 13 ? '奖励产假' : ''
            }}
            {{ scope.row.attendanceRecord[29].adtStatu == 14 ? '陪产假' : '' }}
            {{ scope.row.attendanceRecord[29].adtStatu == 15 ? '探亲假' : '' }}
            {{ scope.row.attendanceRecord[29].adtStatu == 16 ? '工伤假' : '' }}
            {{ scope.row.attendanceRecord[29].adtStatu == 17 ? '调休' : '' }}
            {{ scope.row.attendanceRecord[29].adtStatu == 18 ? '产检假' : '' }}
            {{ scope.row.attendanceRecord[29].adtStatu == 19 ? '流产假' : '' }}
            {{
              scope.row.attendanceRecord[29].adtStatu == 20 ? '长期病假' : ''
            }}
            {{ scope.row.attendanceRecord[29].adtStatu == 21 ? '测试假' : '' }}
            {{ scope.row.attendanceRecord[29].adtStatu == 22 ? '补签' : '' }}
          </template>
        </el-table-column>
      </el-table>
      <div style="display: flex; justify-content: space-between">
        <p></p>
        <!-- 分页 -->
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="$store.state.attendances.pages.page"
          :page-size="$store.state.attendances.pages.pageSize"
          layout="prev, pager, next"
          :total="$store.state.attendances.pages.total"
          style="margin-bottom: 20px"
        >
        </el-pagination>
        <p></p>
      </div>
    </div>
    <Attsetup v-if="Attsetupstatus"></Attsetup>
  </div>
</template>

<script>
/**引入状态码 */
import { STATUS } from '../../untils/Status'
/**引入封装的考勤内容接口 */
import { checkingdepartmentGet } from '../../untils/api/attendances'
import Attsetup from '../attendances/Attsetup.vue'
export default {
  data() {
    return {
      /**部分选择 */
      form: {
        type: [],
        type1: []
      },
      /**部门 */
      department: [],
      _tableData: [],
      checked: false,
      Attsetupstatus: false
    }
  },
  methods: {
    /**分页事件 */
    handleCurrentChange(val) {
      this.$store.dispatch('attendances/checkingtableGets', val)
    },
    // 过滤筛选
    fliter(val, index) {
      this.department[index].checked = !this.department[index].checked
      if (val.checked == true) {
        this.$store.state.attendances.tableData = this._tableData.filter(
          (ele) => ele.departmentName == val.name
        )
      } else {
        this.$store.state.attendances.tableData = this._tableData
      }
    }
  },
  created() {},
  mounted() {
    this.$store.dispatch('attendances/checkingtableGets')
    /**请求部门信息 */
    checkingdepartmentGet().then((res) => {
      // console.log(res);
      if (res.status == STATUS.SUCCESS) {
        this.department = res.data.data.depts
      }
    })
  },
  components: { Attsetup },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
/**头部 */
.attendances-top {
  width: 1450px;
  height: 100px;
  background: #fff;
  border: 1px solid #ebeef5;
  margin-top: 20px;
  .attendances-top-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
/**中间内容 */
.attendances-text {
  width: 1450px;
  // height: 550px;
  background: #fff;
  border: 1px solid #ebeef5;
  margin-top: 20px;
  .attendances-text-department {
    margin-top: 30px;
    margin-left: 10px;
    width: 1450px;
  }
}
/**表格 */
.attendances-table {
  width: 1450px;
  // height: 100px;
  background: #fff;
  border: 1px solid #ebeef5;
  margin-top: 20px;
}
</style>
