<script>
  export let options;
  export let store;
  export let title;
  export let update;
  let storeValue;
</script>

<style>
  .config-option {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  select {
    padding: 0;
    max-height: 20px;
    margin: 0 10px 0 10px;
  }
  label {
    margin: 0;
  }
</style>

<div class="config-option">
  <label>{title}</label>
  <select bind:value={storeValue} on:change={t => update(t.target.value)}>
    {#each options as o}
      <option class="option" value={o}>
        {o.length > 3 ? o
              .slice(0, 1)
              .toUpperCase()
              .concat(o.slice(1)) : o.toUpperCase()}
      </option>
    {/each}
  </select>
</div>
