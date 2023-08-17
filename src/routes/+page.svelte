
<script>
  let textBoxValue = "";
  let result = 0;

  import { json } from '@sveltejs/kit';


  function numValue(value) {
    if (value === "CE") {
      textBoxValue = "";
    } else if (value === "C") {
      textBoxValue = textBoxValue.slice(0, -1);
    } else {
      textBoxValue = textBoxValue + value;
    }
  }

  async function calculate() {

    const textVal = textBoxValue;
    const response = await fetch('/api', {
      method: 'POST',
      body: JSON.stringify({textVal}),
      headers: {
        'content-type': 'application/json'
      }
    });
    textBoxValue = await response.json();
  }
  
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="container">
  <div class="textbx">
    <input
      class="textboxx"
      type="text"
      name=""
      id="numview"
      readonly
      value="{textBoxValue} "
    />
  </div>
  <div class="numbers">
    <div class="1row">
      <div class="calcBut" on:click={() => numValue("7")}>7</div>
      <div class="calcBut" on:click={() => numValue("4")}>4</div>
      <div class="calcBut" on:click={() => numValue("1")}>1</div>
      <div class="calcBut" on:click={() => numValue("0")}>0</div>
    </div>

    <div class="2row">
      <div class="calcBut" on:click={() => numValue("8")}>8</div>
      <div class="calcBut" on:click={() => numValue("5")}>5</div>
      <div class="calcBut" on:click={() => numValue("2")}>2</div>
      <div class="calcBut" on:click={() => numValue(".")}>.</div>
    </div>
    <div class="3row">
      <div class="calcBut" on:click={() => numValue("9")}>9</div>
      <div class="calcBut" on:click={() => numValue("6")}>6</div>
      <div class="calcBut" on:click={() => numValue("3")}>3</div>
      <div class="calcBut" on:click={calculate}>=</div>
    </div>
    <div class="4row">
      <div class="calcBut" on:click={() => numValue(" ÷ ")}>÷</div>
      <div class="calcBut" on:click={() => numValue(" * ")}>*</div>
      <div class="calcBut" on:click={() => numValue(" + ")}>+</div>
      <div class="calcBut" on:click={() => numValue(" - ")}>-</div>
    </div>

    <div class="5row">
      <div class="calcBut" on:click={() => numValue("C")}>C</div>
      <div class="calcBut" on:click={() => numValue("CE")}>CE</div>
    </div>
  </div>
</div>
{result}
<style>
  .container {
    width: auto;
    margin: 0 auto;
    border: 1px solid #ccc;
    width: 290px;
    height: auto;
    padding: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .textbx {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    padding: 10px;
  }
  .textboxx {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    padding: 10px;
  }
  .numbers {
    display: flex;
    align-items: center;
  }
  .calcBut {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 50%;
    width: 60px;
    height: 60px;
    font-size: 18px;
    margin: 5px;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f7f7f7;
  }
  .calcBut:hover {
    background-color: #e0e0e0;
  }
</style>

