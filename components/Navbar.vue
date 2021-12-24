<template>
  <div class="nav-header">
    <div class="nav-text">
      <div class="navlinks">
        <li class="list">
          <NuxtLink to="/" class="link">HOME</NuxtLink>
        </li>
        <li class="list">
          <NuxtLink to="/products" class="link">HISTORY KIZLYAR</NuxtLink>
        </li>
        <li class="list">
          <NuxtLink to="/about" class="link">PARTNERS</NuxtLink>
        </li>
      </div>
    </div>
    <div class="sidebar">
      <div class="lower-header">
        <div class="logo-blog">
          <NuxtLink to="/" class="logo-link">KIZLYAR</NuxtLink>
          <div class="logo-img">
            <img class="logo" src="../images/logo-kizlyar.png" alt="" />
          </div>
          <span class="signature">Exclusive to present in France</span>
        </div>
        <div class="list-section">
          <li class="list-sidebar">
            <NuxtLink to="/" class="link-sidebar">HOME</NuxtLink>
          </li>
          <li class="list-sidebar">
            <NuxtLink to="/products" class="link-sidebar">CATALOG</NuxtLink>
          </li>
          <li class="list-sidebar">
            <NuxtLink to="/category/categories" class="link-sidebar"
              >CATEGORIES</NuxtLink
            >
          </li>
        </div>
      </div>
      <div class="bottom-strip"></div>
    </div>
  </div>
</template>
//

<style>
body {
  margin: 0;
}
.nav-header {
  background-color: #2f2f2f;
  width: 100%;
}

.nav-text {
  color: #fff;
  margin: auto;
  width: 85%;
}
.navlinks {
  height: 42px;
  width: 80%;
  max-width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list {
  list-style: none;
}
.link {
  color: #fff;
  text-decoration: none;
  font-size: 10px;
}
.sidebar {
  width: 100%;
  height: 120px;
  background-image: linear-gradient(to bottom, #ffffff 0%, #ececec 100%);
  background-repeat: repeat-x;
  display: flex;
  flex-direction: column;
}
.lower-header {
  display: flex;
  align-items: center;
  margin: auto;
  width: 85%;
  height: 120px;
}
.logo-blog {
  width: 75%;
}
.logo-link {
  font-family: 'Oswald', Impact, Arial, sans-serif;
  line-height: 50px;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 1px 1px 1px #fff;
  position: relative;
  z-index: 1;
  font-size: 50px;
  text-decoration: none;
  color: #444;
  font-weight: 300;
}
.logo-img {
  margin-left: 75px;
}
.signature {
  display: block;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.2px;
  color: #333333;
}
.logo {
  width: 138px;
  height: 132px;
  position: absolute;
  top: 30px;
  opacity: 0.2;
}
.list-section {
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.list-section.active {
  flex: 10;
}
.list-sidebar {
  display: flex;
  align-items: center;
  height: 120px;
  list-style: none;
}
.link-sidebar {
  color: #000;
  text-decoration: none;
  font-size: 20px;
  font-family: Arial, sans-serif;
  font-weight: 500;
}
.list-section li:hover {
  background-image: linear-gradient(to bottom, #ffffff 0%, #f3f3f3 100%);
  background-repeat: repeat-x;
}
.bottom-strip {
  width: 100%;
  border-top: 5px solid #d5d5d5;
  border-bottom: 2px solid #888;
}
</style>
