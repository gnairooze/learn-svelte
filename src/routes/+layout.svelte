<!-- src/routes/+layout.svelte -->
<script>
    // You can define your navigation items here
    const navItems = [
      { name: 'home', path: '/' },
      { name: 'intro-reactivity', path: '/intro-reactivity' },
      { name: 'props', path: '/props' },
      { name: 'logic', path: '/logic' },
      { name: 'events', path: '/events' },
      { name: 'bindings', path: '/bindings' },
      { name: 'lifecycle', path: '/lifecycle'}
    ];
  </script>
  
  <style>
    html, body {
    height: 100%;
    margin: 0;
    }

    .container {
      display: flex;
      height: 98vh; /* Full viewport height */
    }
    nav {
      width: 200px;
      background-color: #f4f4f4;
      padding: 1rem;
    }
    nav a {
      display: block;
      margin-bottom: 1rem;
      text-decoration: none;
      color: #333;
    }
    .content {
      flex: 1;
      padding: 1rem;
    }
  </style>
  
  <div class="container">
    <nav>
      {#each navItems as item}
        <a href={item.path}>{item.name}</a>
      {/each}
    </nav>
    <div class="content">
      <slot></slot>
    </div>
  </div>
  