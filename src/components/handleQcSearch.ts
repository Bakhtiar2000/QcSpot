import Swal from "sweetalert2";

// Extract domain from url
function extractFromUrl(url: string) {
  let domain: string, itemID: string;
  const urlInput = new URL(url);
  const partBeforeDotCom = url.split(".com")[0];

  const lastSlashIndex = partBeforeDotCom.lastIndexOf("/");
  const lastDotIndex = partBeforeDotCom.lastIndexOf(".");
  const delimiterIndex = Math.max(lastSlashIndex, lastDotIndex);

  domain = partBeforeDotCom.slice(delimiterIndex + 1, partBeforeDotCom.length);
  itemID =
    urlInput.searchParams.get("itemID") ||
    urlInput.searchParams.get("id") ||
    "";

  const ali_1688Url = urlInput.href.includes("detail.1688.com/offer");
  if (ali_1688Url) {
    itemID = urlInput.href.split("offer/")[1].split(".html")[0];
    domain = "ali_1688";
  }

  return { domain, itemID };
}

// Function to handle the cssbuy URL
function handleCssBuyUrl(url: string) {
  let shopType = "";
  let itemId = "";

  // Check if URL contains 'item-micro' to set shopType to 'WEIDIAN'
  if (url.includes("item-micro")) {
    shopType = "WEIDIAN";
    itemId = url.split("item-micro-")[1].split(".htm")[0];
  }
  // Check if URL contains 'item-1688' to set shopType to 'ali_1688'
  else if (url.includes("item-1688")) {
    shopType = "ali_1688";
    itemId = url.split("item-1688-")[1].split(".htm")[0];
  }
  // Default to 'TAOBAO' if it contains 'item-' (assuming it's a Taobao item)
  else if (url.includes("item-")) {
    shopType = "TAOBAO";
    itemId = url.split("item-")[1].split(".htm")[0];
  }
  return { shopType, itemId };
}

// Handle Qc Search
export const handleQcSearch = async (
  input: string,
  navigate: (path: string) => void
) => {
  try {
    const url = new URL(input);
    const searchedUrl = url.searchParams.get("url");
    const cssBuyUrl = url.href.includes("www.cssbuy.com");

    let shopType: string | undefined;
    let id: string | undefined;

    shopType =
      url.searchParams.get("shoptype") ||
      url.searchParams.get("shop_type") ||
      url.searchParams.get("channel") ||
      url.searchParams.get("source") ||
      url.searchParams.get("platform") ||
      (searchedUrl && extractFromUrl(searchedUrl).domain) ||
      ((cssBuyUrl && handleCssBuyUrl(url.href)?.shopType) as string);

    id =
      url.searchParams.get("id") ||
      url.searchParams.get("itemID") ||
      url.searchParams.get("goodsId") ||
      (searchedUrl && extractFromUrl(searchedUrl).itemID) ||
      ((cssBuyUrl && handleCssBuyUrl(url.href)?.itemId) as string);
    console.log(url, shopType, id);

    if (!shopType || !id) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid URL or missing parameters!",
        footer:
          "The URL you provided is not supported. If you think this is a mistake, please contact us.",
      });
      return;
    }
    navigate(`/product/${shopType}/${id}`);
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Invalid URL format!",
      footer: "Please provide a valid URL.",
    });
  }
};

// https://www.eastmallbuy.com/index/item/index.html?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D842690740893&inviter=Findsly
