# Crescent (CRE)

<!--@include: ./_cosmos.md{,12}--> And `crescent-1` is the `subChainId` for Crescent.

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
    subChainId: 'crescent-1',
  }, null))
})
</script>
