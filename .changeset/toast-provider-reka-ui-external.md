---
"@aggc/ui": patch
---

Fix UiToastProvider crashing with "Cannot read properties of null (reading 'ce')" in consumer apps. reka-ui was being bundled into the published dist instead of externalized like vue and lucide-vue-next, which could duplicate reka-ui's runtime across chunks and break its internal Vue instance tracking. reka-ui is now external and resolved once from the consumer's own dependency tree.
