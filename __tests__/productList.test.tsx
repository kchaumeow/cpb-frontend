import { ProductsList } from "@/app/components/productsList";
import { cleanup, render, screen } from "@testing-library/react";
import { ProductDTO } from "../types";

describe("shows products list", () => {
  afterEach(cleanup);

  test("loads products list with length 3", async () => {
    const productsList = [
      {
        product: {
          id: "gid://shopify/Product/78537448163060234",
          bodyHtml: `<p><strong>SKU</strong><span></span><br><strong>Latching Switches - Choose a switch</strong><span> Aluminum Illuminated SPL SPDT 12V Pushbutton Switch (8)</span><br><strong>Latching Switches - Choose a color</strong><span> Green (8)</span><br><strong>CABLES - _1_0_0</strong><span> Choice 1</span><br><strong>CABLES - _1_1_1</strong><span> NO</span><br><strong>Momentary Switches - Choose a switch</strong><span> Aluminum Illuminated Halo Ring SPDT 12V Pushbutton Switch</span><br><strong>Momentary Switches - Choose a Color</strong><span> Blue Halo Ring Pushbutton Switch Aluminum Finish Non-illumination</span><br><strong>ATC FUSES - Choose a Fuse</strong><span> Assorted illumination glow fuses 12V ATC automotive</span><br><strong>ATC FUSES - Choose a Product</strong><span> 15A Blue ATC Glow Fuse</span><br><strong>Custom Acrylic Option -<span> </span></strong><span>Purple-Mirror-Acrylic-RBX-4CH</span><br><strong>base_price</strong><span></span><br><strong>is_calculated</strong><span> true</span><br><strong>configId</strong><span> -afmAdvpRxrB3hQOTJ8uNms</span></p>
          <p><strong data-mce-fragment="1">_image</strong><span data-mce-fragment="1"> https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6718400397389-8oPQCySGK1s5KgRqOJH_qreY.png</span></p>
          <p><strong data-mce-fragment="1">View - Back</strong><span data-mce-fragment="1"> https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6751031230541-4CPJ5H5uT3EGFi1aZ1X72Nn7.png</span><br data-mce-fragment="1"><strong data-mce-fragment="1">View - Front</strong><span data-mce-fragment="1"> https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6751031230541-6dwzS8fkK9Gy1RsLbHsXO_7I.png</span></p>
          <p><strong data-mce-fragment="1">Text - RMBG123</strong><span data-mce-fragment="1"> Url - https://storage.googleapis.com/custom-product-builder-stage/57312936089/mao-stage-store-6862657945753-3P9gckdUbUTwznqX6F_rES_--no-bg.png</span><br data-mce-fragment="1"><span data-mce-fragment="1">BeforeRemoveBgUrl - https://storage.googleapis.com/custom-product-builder-stage/8804663373/cpb-v2-stage-march-6736665542733-83CHnCVQMDTp3xGwPOZleEj-.jpg</span><br data-mce-fragment="1"><span data-mce-fragment="1">imageWithMockup - https://storage.googleapis.com/custom-product-builder-stage/8804663373/cpb-v2-stage-march-6736665542733-1XkV_gk7kZBNYP6kAMSDpg3e.png</span><br><strong>productUrl</strong><span> https://cpb-new-developer.myshopify.com/products/demo-t-shirt-automatic-recoloring-out-of-stock-test-product</span></p>`,
        },
        images: [
          {
            id: 446,
            productId: "gid://shopify/Product/78537448163060234",
            src: "https://cdn.shopify.com/s/files/1/0634/4530/3474/products/cpb-test-task--_6VwQ-HIO0QWAUIEPJ6XIQdL.png?v=1699438054",
          },
        ],
      },
      {
        product: {
          id: "gid://shopify/Product/7853744816306",
          bodyHtml: `<p><strong>SKU</strong><span></span><br><strong>Latching Switches - Choose a switch</strong><span> Aluminum Illuminated SPL SPDT 12V Pushbutton Switch (8)</span><br><strong>Latching Switches - Choose a color</strong><span> Green (8)</span><br><strong>CABLES - _1_0_0</strong><span> Choice 1</span><br><strong>CABLES - _1_1_1</strong><span> NO</span><br><strong>Momentary Switches - Choose a switch</strong><span> Aluminum Illuminated Halo Ring SPDT 12V Pushbutton Switch</span><br><strong>Momentary Switches - Choose a Color</strong><span> Blue Halo Ring Pushbutton Switch Aluminum Finish Non-illumination</span><br><strong>ATC FUSES - Choose a Fuse</strong><span> Assorted illumination glow fuses 12V ATC automotive</span><br><strong>ATC FUSES - Choose a Product</strong><span> 15A Blue ATC Glow Fuse</span><br><strong>Custom Acrylic Option -<span> </span></strong><span>Purple-Mirror-Acrylic-RBX-4CH</span><br><strong>base_price</strong><span></span><br><strong>is_calculated</strong><span> true</span><br><strong>configId</strong><span> -afmAdvpRxrB3hQOTJ8uNms</span></p>
              <p><strong data-mce-fragment="1">_image</strong><span data-mce-fragment="1"> https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6718400397389-8oPQCySGK1s5KgRqOJH_qreY.png</span></p>
              <p><strong data-mce-fragment="1">View - Back</strong><span data-mce-fragment="1"> https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6751031230541-4CPJ5H5uT3EGFi1aZ1X72Nn7.png</span><br data-mce-fragment="1"><strong data-mce-fragment="1">View - Front</strong><span data-mce-fragment="1"> https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6751031230541-6dwzS8fkK9Gy1RsLbHsXO_7I.png</span></p>
              <p><strong data-mce-fragment="1">Text - RMBG123</strong><span data-mce-fragment="1"> Url - https://storage.googleapis.com/custom-product-builder-stage/57312936089/mao-stage-store-6862657945753-3P9gckdUbUTwznqX6F_rES_--no-bg.png</span><br data-mce-fragment="1"><span data-mce-fragment="1">BeforeRemoveBgUrl - https://storage.googleapis.com/custom-product-builder-stage/8804663373/cpb-v2-stage-march-6736665542733-83CHnCVQMDTp3xGwPOZleEj-.jpg</span><br data-mce-fragment="1"><span data-mce-fragment="1">imageWithMockup - https://storage.googleapis.com/custom-product-builder-stage/8804663373/cpb-v2-stage-march-6736665542733-1XkV_gk7kZBNYP6kAMSDpg3e.png</span><br><strong>productUrl</strong><span> https://cpb-new-developer.myshopify.com/products/demo-t-shirt-automatic-recoloring-out-of-stock-test-product</span></p>`,
        },
        images: [
          {
            id: 4352,
            productId: "gid://shopify/Product/7853744816306",
            src: "https://cdn.shopify.com/s/files/1/0634/4530/3474/products/cpb-test-task--_6VwQ-HIO0QWAUIEPJ6XIQdL.png?v=1699438054",
          },
        ],
      },
      {
        product: {
          id: "gid://shopify/Product/7853744816302345555466",
          bodyHtml: `<p><strong>SKU</strong><span></span><br><strong>Latching Switches - Choose a switch</strong><span> Aluminum Illuminated SPL SPDT 12V Pushbutton Switch (8)</span><br><strong>Latching Switches - Choose a color</strong><span> Green (8)</span><br><strong>CABLES - _1_0_0</strong><span> Choice 1</span><br><strong>CABLES - _1_1_1</strong><span> NO</span><br><strong>Momentary Switches - Choose a switch</strong><span> Aluminum Illuminated Halo Ring SPDT 12V Pushbutton Switch</span><br><strong>Momentary Switches - Choose a Color</strong><span> Blue Halo Ring Pushbutton Switch Aluminum Finish Non-illumination</span><br><strong>ATC FUSES - Choose a Fuse</strong><span> Assorted illumination glow fuses 12V ATC automotive</span><br><strong>ATC FUSES - Choose a Product</strong><span> 15A Blue ATC Glow Fuse</span><br><strong>Custom Acrylic Option -<span> </span></strong><span>Purple-Mirror-Acrylic-RBX-4CH</span><br><strong>base_price</strong><span></span><br><strong>is_calculated</strong><span> true</span><br><strong>configId</strong><span> -afmAdvpRxrB3hQOTJ8uNms</span></p>
                  <p><strong data-mce-fragment="1">_image</strong><span data-mce-fragment="1"> https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6718400397389-8oPQCySGK1s5KgRqOJH_qreY.png</span></p>
                  <p><strong data-mce-fragment="1">View - Back</strong><span data-mce-fragment="1"> https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6751031230541-4CPJ5H5uT3EGFi1aZ1X72Nn7.png</span><br data-mce-fragment="1"><strong data-mce-fragment="1">View - Front</strong><span data-mce-fragment="1"> https://storage.googleapis.com/custom-product-builder-stage/8804663373/orders/cpb-v2-stage-march-6751031230541-6dwzS8fkK9Gy1RsLbHsXO_7I.png</span></p>
                  <p><strong data-mce-fragment="1">Text - RMBG123</strong><span data-mce-fragment="1"> Url - https://storage.googleapis.com/custom-product-builder-stage/57312936089/mao-stage-store-6862657945753-3P9gckdUbUTwznqX6F_rES_--no-bg.png</span><br data-mce-fragment="1"><span data-mce-fragment="1">BeforeRemoveBgUrl - https://storage.googleapis.com/custom-product-builder-stage/8804663373/cpb-v2-stage-march-6736665542733-83CHnCVQMDTp3xGwPOZleEj-.jpg</span><br data-mce-fragment="1"><span data-mce-fragment="1">imageWithMockup - https://storage.googleapis.com/custom-product-builder-stage/8804663373/cpb-v2-stage-march-6736665542733-1XkV_gk7kZBNYP6kAMSDpg3e.png</span><br><strong>productUrl</strong><span> https://cpb-new-developer.myshopify.com/products/demo-t-shirt-automatic-recoloring-out-of-stock-test-product</span></p>`,
        },
        images: [
          {
            id: 4121116,
            productId: "gid://shopify/Product/7853744816302345555466",
            src: "https://cdn.shopify.com/s/files/1/0634/4530/3474/products/cpb-test-task--_6VwQ-HIO0QWAUIEPJ6XIQdL.png?v=1699438054",
          },
        ],
      },
    ];

    render(<ProductsList products={productsList} />);

    const products = screen.queryAllByRole("gridcell");

    expect(products).toHaveLength(3);
  });

  test("loads empty products list", async () => {
    const productsList: ProductDTO[] = [];

    render(<ProductsList products={productsList} />);

    const products = screen.queryAllByRole("gridcell");

    expect(products).toHaveLength(0);
  });
});
