<script>
  export let data;
  export let store;
  export let title;
  let t;
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
  <select
    bind:value={$store}
    on:change={function() {
      t = '';
      this.blur();
    }}>
    {#each data as d}
      <option class="option" value={d}>
        {d.length > 3 ? d
              .slice(0, 1)
              .toUpperCase()
              .concat(d.slice(1)) : d.toUpperCase()}
      </option>
    {/each}
  </select>
</div>
