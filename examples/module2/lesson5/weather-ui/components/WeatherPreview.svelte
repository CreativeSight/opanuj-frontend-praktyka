<script lang="ts">
  import { LocationWeather } from '../models/LocationWeather';
  import DailyWeather from './DailyWeather.svelte';

  export let weather: LocationWeather;
  export let weatherDetails = weather.weatherDetails ?? weather.weatherDetails.Weather;
</script>

<div>
  <h2 class="text-2xl py-4">
    {weather.city}, {weather.country}
  </h2>
  <ul class="space-y-4">
    {#if weatherDetails}
      {#each weatherDetails as details}
        <DailyWeather dailyWeather={details} />
      {/each}
    {/if}
  </ul>
</div>

