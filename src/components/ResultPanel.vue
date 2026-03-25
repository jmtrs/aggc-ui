<script setup lang="ts">
import { CheckCircle2, TriangleAlert } from "lucide-vue-next";

import StatusBadge from "./StatusBadge.vue";
import {
  resultPanelHeaderClass,
  resultPanelIconClass,
  resultPanelListClass,
  resultPanelRootClass,
  resultPanelSectionClass,
  resultPanelSectionTitleClass,
  resultPanelSummaryClass,
  resultPanelTitleClass,
} from "./ResultPanel.styles";

const props = defineProps<{
  ok: boolean;
  summary: string;
  warnings?: string[];
  errors?: string[];
  messages?: string[];
  live?: "polite" | "assertive" | "off";
  passLabel?: string;
  failLabel?: string;
  detailsLabel?: string;
  warningsLabel?: string;
  errorsLabel?: string;
}>();
</script>

<template>
  <div
    :class="resultPanelRootClass(ok)"
    :aria-live="props.live ?? 'polite'"
    :role="(props.live ?? 'polite') === 'off' ? undefined : 'status'"
  >
    <div :class="resultPanelHeaderClass">
      <div :class="resultPanelSummaryClass">
        <div :class="resultPanelIconClass({ ok })">
          <component :is="ok ? CheckCircle2 : TriangleAlert" :size="18" />
        </div>
        <h3 :class="resultPanelTitleClass">{{ props.summary }}</h3>
      </div>
      <StatusBadge :tone="ok ? 'success' : 'warning'">
        {{ ok ? props.passLabel ?? "Pass" : props.failLabel ?? "Fail" }}
      </StatusBadge>
    </div>

    <div v-if="messages?.length" :class="resultPanelSectionClass({ spaced: true })">
      <p :class="resultPanelSectionTitleClass({ tone: 'detail' })">{{ props.detailsLabel ?? "Details" }}</p>
      <ul :class="resultPanelListClass({ tone: 'detail' })">
        <li v-for="message in messages" :key="message">{{ message }}</li>
      </ul>
    </div>

    <div v-if="warnings?.length" :class="resultPanelSectionClass({ spaced: !!errors?.length })">
      <p :class="resultPanelSectionTitleClass({ tone: 'warning' })">{{ props.warningsLabel ?? "Warnings" }}</p>
      <ul :class="resultPanelListClass({ tone: 'warning' })">
        <li v-for="warning in warnings" :key="warning">{{ warning }}</li>
      </ul>
    </div>

    <div v-if="errors?.length">
      <p :class="resultPanelSectionTitleClass({ tone: 'error' })">{{ props.errorsLabel ?? "Errors" }}</p>
      <ul :class="resultPanelListClass({ tone: 'error' })">
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </div>
  </div>
</template>
