---
next:
  text: "Akash (AKT)"
  link: "./akash"
---

# Cosmos Hub (ATOM)

<!--@include: ./_cosmos.md{,12}--> And `cosmoshub-4` is the `subChainId` for Cosmos Hub.

<div ref="refDetectWallet"/>

<!--@include: ./_cosmos.md{14,}-->

<script setup>
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { ref, onMounted } from 'vue'

import DetectWallet from '../components/DetectWallet.jsx'

const refDetectWallet = ref()
const refConnectWallet = ref()
onMounted(() => {
  const rootDetectWallet = createRoot(refDetectWallet.value)
  rootDetectWallet.render(createElement(DetectWallet, {
    chainId: 'cosmos',
    subChainId: 'cosmoshub-4',
  }, null))
})
</script>
