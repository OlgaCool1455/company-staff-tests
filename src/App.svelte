<script lang="js">
    import router from "page";
    import Index from "./pages/index.svelte";

    let page;
    let params = {};

    router("/", () => page = Index)

    router.start();
</script>

<svelte:component this={page} {params}/>