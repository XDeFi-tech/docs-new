# Juno (JUNO)

<!--@include: ./_cosmos.md{,12}--> And `juno-1` is the `subChainId` for Juno.

<div ref="refDetectWallet"/>

<!--@include: ./_cosmos.md{14,}-->

<div ref="refDetectWallet"/>

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
    subChainId: 'juno-1',
  }, null))
})
</script>
