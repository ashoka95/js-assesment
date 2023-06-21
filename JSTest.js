/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NftNum = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _ShoeSize, _ShoeColor, _bling) {
    const NFTobj ={
    "name": _name,
    "shoeSize": _ShoeSize,
    "ShoeColor": _ShoeColor,
    "bling" : _bling
    };
    NftNum.push(NFTobj);
    console.log("Minted ;" + _name);
    }
  

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTS () {
    for (let i = 0; i < NftNum.length; i++){
    console.log("\nID: \t\t" + (i + 1));
    console.log("Name: \t\t" + NftNum[i].name);
    console.log("Shoe Size: \t" + NftNum[i].shoeSize); 
    console.log("Shoe Color: \t" + NftNum[i].ShoeColor);
    console.log("Bling: \t\t" + NftNum[i].bling);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal no of NFTS We have: " + NftNum.length);
}

// call your functions below this line
    mintNFT("Adidas", "8", "Black", "Gold Plated");
    mintNFT("Puma", "9", "Pink", "Silver lined"); 
    mintNFT("Bata", "7", "Gray", "Plain");
    mintNFT("Nike", "8", "Black", "Plain");
    mintNFT("U.S Polo", "10", "white", "Silver Plated");
    listNFTS();
    getTotalSupply();
