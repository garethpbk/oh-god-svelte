<script>
  let firstName = "";
  let lastName = "";
</script>

<div>
  <input bind:value={firstName} />
  <input bind:value={lastName} />
  <p>{firstName} {lastName}</p>
</div>
