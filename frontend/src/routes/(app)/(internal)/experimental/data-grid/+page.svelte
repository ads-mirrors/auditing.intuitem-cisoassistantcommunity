<script lang="ts">
    import { Pager } from "@svar-ui/svelte-core";
	import { Grid, Tooltip } from '@svar-ui/svelte-grid';
	import { Willow } from '@svar-ui/svelte-grid';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const columns = data.columns;
    const allData = data.data

	let api = $state();
    function setPage(ev) {
        const { from, to } = ev;
        data = allData;
    }
    setPage({ from: 0, to: 8 });
</script>

<div class="shadow-lg">
	<Willow>
		<Tooltip {api}>
            <Pager total={allData.length} pageSize={10} onchange={setPage} />
			<Grid data={data.data} {columns} reorder bind:this={api} />
		</Tooltip>
	</Willow>
</div>
