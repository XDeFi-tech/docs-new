# Bitcoin (BTC)

<!--@include: ./_xfi.md{,12}--> And `bitcoin` is the `chainId` for Bitcoin.

<div ref="refDetectWallet"/>

<!--@include: ./_xfi.md{14,}-->

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
    chainId: 'bitcoin',
  }, null))
})
</script>
