 Questions
 ===========
  Types of Microfrontend integration?
    - Microfrontend integration can be done in several ways, depending on how the different microfrontends communicate, 
      share resources, and render on the page. Here are the main types of microfrontend integration:  

    - Build-Time Integration (Static Composition)  
      - All microfrontends are compiled and bundled together at build time.  
      - This approach is similar to a monolith but allows teams to work independently before merging their microfrontends.  
      - Example: Using a monorepo and tools like [Module Federation](https://webpack.js.org/concepts/module-federation/) in Webpack.  
      - Pros: Optimized for performance, no runtime overhead.  
      - Cons: Reduces flexibility, as all microfrontends must be deployed together.  

    - Run-Time Integration (Client-Side Composition)  
      - Microfrontends are loaded dynamically in the browser at runtime.  
      - This is done using iframing, JavaScript-based imports, Web Components, or Module Federation.  
      - Example:  
        - Single SPA: A JavaScript framework for assembling microfrontends dynamically.  
        - Web Components: Each microfrontend is a self-contained web component.  
        - Module Federation: Dynamically loads microfrontends as needed.  
      - Pros: Maximum flexibility, independent deployments.  
      - Cons: Can lead to performance and security challenges.  

    - Server-Side Integration  
      - The server assembles different microfrontends before sending them to the client.  
      - This can be done using techniques like Edge Side Includes (ESI), Reverse Proxy, or SSR frameworks (e.g., Next.js, Express).  
      - Example: An NGINX or Express.js server fetches microfrontends and merges them into a single page.  
      - Pros: Better performance than client-side integration, SEO-friendly.  
      - Cons: Requires a strong backend infrastructure.  

  - Edge-Side Integration (CDN-Based Composition)  
      - Uses Content Delivery Networks (CDNs) or edge servers to fetch and compose microfrontends.  
      - Ideal for high-performance applications where response time is critical.  
      - Example: Using Cloudflare Workers or Fastly to serve different microfrontends.  
      - Pros: Low latency, improved scalability.  
      - Cons: Limited control over composition logic.  


    - Choosing the Right Integration Approach  
      | Approach          | Best For                      | Example Tools             |  
      |-------------------|-------------------------------|---------------------------|  
      | Build-Time       | Simple, small-scale projects   | Webpack, Monorepo         |  
      | Server-Side      | SEO, performance-critical apps | NGINX, Next.js, SSR       |  
      | Run-Time         | Independent teams, flexibility | Single SPA, Web Components |  
      | Edge-Side        | Fast global delivery           | CDN, Cloudflare Workers   |  

