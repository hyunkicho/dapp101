# dapp101 설계
repo for a dapp developer. basic tutorial with token, nft, dao, multisig

1. 전체 구조 그려보기

flow chart
전체적인 구조는 하나의 웹 페이지 안에서 지갑 주소를 체크하여 관리자 권한인 경우와 아닌 경우를 나누어서 페이지를 표시해 주는 구조로 잡는다.

```
flowchart TD
    A[webpage] -->|log in metamask| B(meta mask)
    B --> C{check address}
    C -->|owner| OP[owner pages]
    OP --> NFTO[NFT owner page]
    OP --> ICOO[ICO owner page]
    OP --> DAOO[DAO owner page]
    OP --> MP[Multisig page]
    C -->|user| SP[service pages]
    SP --> NFT[NFT page]
    SP --> ICO[ICO page]
    SP --> DAO[DAO page]
```

https://mermaid.live/edit#pako:eNp1kc1qhDAQgF8l5NTC7gt4KOwqhR52FdxTdQ9TM2pYk0gSK0V99yaR7g9lc5hMMt8MH8lEK8WQRrTu1Fi1oC05JaUkbu2KEb96aPBMttu3uVMN4ZIItCDAXGayf_E58YfXtWPvQRJPVYvVhQBjGo1Z1lochqhRop5JmhUhI368Oa9EmoX24_spLVwgN-IR-IjTtHDhKZDsHODCU-CQFYehs9zw5r66Kg7GG-ZZ4fZvXuGDY351DIp3zflVLrj9rzihIPVXKSXdUIFaAGfu_ScPl9S2KLCkkUsZ1uAsS1rKxaEwWJX_yIpGVg-4oUPPwGLCodEgaFRDZ9xtD_JTqdsZGbdKH9Y_Dl-9_AIz25v6


2. 시퀀스 다이어그램 작성해보기 - ICO

유저가 웹페이지에서 ERC20 토큰을 mint 해보고 이벤트 로그를 체크해 볼 수 있다.

```
sequenceDiagram
    actor user
    participant webpage
    participant metamask
    participant contract as erc20 contract
    user ->>+ webpage : A-1. click sign in
    webpage ->>+ metamask : A-2. sign in
    
    alt is owner
    metamask ->>+ contract : A-3. check owner
    contract -->>- metamask : A-4. return true
    metamask -->> webpage : A-5. display owner page

    else is user
    metamask ->>+ contract : B-1. view function
    contract -->>- metamask : B-2. return info
    metamask -->>- webpage : B-3. display user page
    user ->>+ webpage : C-1. mint (amount)
    webpage ->>+ metamask : C-2. sign Tx with ETH
    metamask ->>+ contract : C-3. execute Tx
    webpage ->>+ contract : D-1. get event
    contract -->>- webpage : D-2. return event
    end
```
https://mermaid.live/edit#pako:eNqFU01TwjAQ_Ss7OelIGUW99MCMgDNePMnJ6SWmC2RoNzXd8DEM_92kpaUISk9N8vL27XvZnVAmRRGLEr8dksKJlnMr84TAf1KxseBKtPW6kJa10oUkhjV-FXKO5wc5ssxluTw_UYbYek6QJaBVg_t2p8aGQhANh3cNOcTwEj30QWVaLaHUcwJNNbZBVPCmZIUf9E-Rh1YyBl2CWVPTTHupomi1BYpHX3KBvmQH3gIij49OSz71wSI7S8DW4W96jz9p6LkPqS6LTG5rfqh9rK9hVmIQejT9T52jYM1K4xpmjhRrQ9eUjoI5B6WaZuaC0qgjdRSMaKRW4RwTv5TVOAjKtU_6RubGEd_-n9W4zWq6gbXmBbxO3640PQ6acIPKMfprFwp0wJMgaI4MuELii-4c1U865nTwSGnzjhISPZGjzaVO_cjswn4ieIE5JiL2vynOpMs4EQntPVQ6Nh9bUiIOz6InXJFKbiZMxDPps-4JPxqfxhzXmGo_de_1WFbTuf8BEKMrAw

3. 시퀀스 다이어그램 작성해보기 - NFT (ERC721)

nft를 erc20 토큰으로 구매해보고 구매내역을 확인해 볼 수 있다.

```
sequenceDiagram
    actor user
    participant webpage
    participant contract as erc721 contract
    user ->> webpage : A. buy nft with token
    webpage ->> contract : A-1. approve
    webpage ->> contract : A-2. mint nft and get erc20
    user ->> webpage : B. my page
    webpage ->> contract : B-1. check balance and get tokenURI
    contract -->> webpage : B-2. display nft Info
```
https://mermaid.live/edit#pako:eNqFUrFuwyAQ_ZUTc2w1Xip5iNSoS4YsrbpUXs5wtlFsoBhaWVH-vUdcO1KrqCxwx3uPd9ydhbSKRClG-ohkJD1rbD0OlQFeKIP1EEfyc-zQBy21QxPgi2qHLf29kNYEz0zAEcjLx2K7pmZw0oNst1skoISnHOo4gWlYV4cOgj2RmdELKBFWaWZk2xzQOW8_6R9gkcOg2VhSR6OgpZCMFQ937eyZMcGtvDvS--RBdiRPUGOP_Hur_rWAt5fDzF852a93kjelR9fjXPzBNLb6KTztYiMG8gNqxS06p3wlQkcDVaLko6IGYx8qUZkLQzEG-zoZKcrgI21EdArD0lFRNtiPnOUmvVt7i0lp7vJxHoPrNFy-AQNVrr0


4. 시퀀스 다이어그램 작성해보기 - DAO

DAO안건을 제안하고 투표하고 확인해 본다.

```
sequenceDiagram
    actor user
    participant webpage
    participant contract as Govnernor contract
    user ->> webpage : A. propse
    webpage ->> contract : A-1. prpose TX
    user ->> webpage : B. select and cast vote
    webpage ->> contract : B. castVote Tx
    user ->> webpage : C. view page
    webpage ->> contract : C-1. check proposal status
    contract -->> webpage : C-2. display proposal Info
```
https://mermaid.live/edit#pako:eNp9ksFOwzAMhl_FynmtBMceJsGQEAdOTAihXEzibtHaJCTOxjTt3UlWukqgkkti-_-_JLJPQjlNohGRPhNZRQ8GNwF7aSEvVOwCpEhhiD0GNsp4tAwH-vC4ob8F5SyH7ASM8Oj2loLNkDE76AsSquVypEADdzX44Hz8IY6FIroSs6q6KTrvIsH6bRZ2X0OkjsojrAaFkWHv-H909hTha9bB-msWvaphb-gA0-dneKvyVLUltbt8zEXsIDJyioPtKq1-XVDd1qBN9B0eJ-eTbZ20g7PsYiF6Cj0anZt3KnkpeEs9SdHko6YWU8dSSHvOUkzsXo5WiYZDooVIXiOPvRZNi13M2dy-d-emmLTJ_X8eBuQyJ-dvGl-4-g

# ERC20 Token
1. ERC20 토큰을 발행하기 위해 지정해야 하는 사항들

ERC20 토큰 발행은 매우 간단하지만 실제로 발행할 때는 다음 사항들을 고려해야 합니다.
```
    - symbol
    - name 
    - decimal (특별한 이유가 없으면 18, 그러나 토큰 종류에 따라 스테이블 코인 또는 디파이에 쓰이는 토큰들은 6, 8, 10 등이 있기도 하다.) 
    - totalSupply & cap (총 발행량 지정 여부에 따라 최대 발행량을 정해둘 시)
    - airdrop 초기에 유저들에게 mint를 반복으로 시행해서 토큰을 나눠줄 경우
    - time lock 토큰을 보내주되 특정 시간 이후에 전송이 되도록 하는 경우 (락업 기능)
    - pause (토큰 전체 정지 기능)
    - freeze (특정 계정 정지 기능)
    - multisig (관리자 권한을 멀티시그 지갑으로 다룰지에 대한 여부)
    - token Image (이더 스캔 등에 등록할 이미지)
```
저희가 다룰 토큰의 경우를 생각해서 지정해 보도록 하겠습니다.
토큰 판매의 경우 요즘에는 swap 기능을 만들어서 바꿔주는 경우가 많습니다.
하지만 이번 실습의 경우 erc20 토큰에 교환비를 지정해서 이더리움을 받으면 토큰을 보내주는 구조로 진행하도록 하겠습니다.

   기본 정보
```
    - symbol : TT
    - name : TestToken
    - decimal :18
    - 교환비 : 1TT = 0.001ETH (1 TestToken은 0.001 ETH, 1 이더리움으로 testToken 1000개 구매 가능)
```
2. 프론트엔드 - boot strap 사용해보기

    - sidebar 구현
    
    style.css 의 11713줄 참고.
    ```     
    #sidebar-wrapper {
      position: fixed;
      z-index: 2;
      right: 0;
      width: 250px;
      height: 100%;
      transition: all 0.4s ease 0s;
      transform: translateX(250px);
      background: #1d809f;
      border-left: 1px solid rgba(255, 255, 255, 0.1);
    }

    .sidebar-nav {
      position: absolute;
      top: 0;
      width: 250px;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .sidebar-nav li.sidebar-nav-item a {
      display: block;
      text-decoration: none;
      color: #fff;
      padding: 15px;
    }

    .sidebar-nav li a:hover {
      text-decoration: none;
      color: #fff;
      background: rgba(255, 255, 255, 0.2);
    }

    .sidebar-nav li a:active,
    .sidebar-nav li a:focus {
      text-decoration: none;
    }

    .sidebar-nav > .sidebar-brand {
      font-size: 1.2rem;
      background: rgba(52, 58, 64, 0.1);
      height: 80px;
      line-height: 50px;
      padding-top: 15px;
      padding-bottom: 15px;
      padding-left: 15px;
    }

    .sidebar-nav > .sidebar-brand a {
      color: #fff;
      text-decoration: none;
    }

    .sidebar-nav > .sidebar-brand a:hover {
      color: #fff;
      background: none;
    }

    #sidebar-wrapper.active {
      right: 250px;
      width: 250px;
      transition: all 0.4s ease 0s;
    }
     ```
    
    a:hover는 사용자가 마우스를 해당 링크 위로 올리면 적용되며, 링크의 스타일을 변경할 수 있습니다. 
    보통 링크 위에 마우스를 올렸을 때 글자색이나 배경색 등이 바뀌는 효과를 줄 때 사용합니다.

    a:active는 사용자가 링크를 클릭하고 있는 동안 적용되며, 링크의 스타일을 변경할 수 있습니다.
    예를 들어 링크를 클릭할 때 글자색이나 배경색 등이 바뀌는 효과를 줄 때 사용합니다.

-Spacing(Margin,Padding)

마진과 패딩 유틸리티 클래스의 네이밍 규칙을 Bootstrap 공식문서를 참고해서 알아보겠습니다. 
출처 : https://getbootstrap.com/docs/4.0/utilities/spacing/

{property}{sides}-{size}: 
마진 또는 패딩을 지정하는데 사용됩니다.
{property}는 마진 또는 패딩을 의미하는 단어입니다.
{sides}는 마진 또는 패딩이 적용될 방향을 의미합니다
{size}는 마진 또는 패딩의 크기를 지정하는데 사용되며, 0에서 5까지의 값을 가질 수 있습니다.

{property}{sides}-{breakpoint}-{size}: 
뷰포트 크기에 따라 다른 마진 또는 패딩 값을 지정하는데 사용됩니다.
{breakpoint}는 뷰포트의 크기를 나타내는 단어입니다.


밑은 property, sides, size와 같이 클래스 이름의 형식을 설명합니다.
```
Where property is one of:

m - for classes that set margin
p - for classes that set padding

Where sides is one of:

t - for classes that set margin-top or padding-top
b - for classes that set margin-bottom or padding-bottom
l - for classes that set margin-left or padding-left
r - for classes that set margin-right or padding-right
x - for classes that set both *-left and *-right
y - for classes that set both *-top and *-bottom
blank - for classes that set a margin or padding on all 4 sides of the element
Where size is one of:

0 - for classes that eliminate the margin or padding by setting it to 0
1 - (by default) for classes that set the margin or padding to $spacer * .25
2 - (by default) for classes that set the margin or padding to $spacer * .5
3 - (by default) for classes that set the margin or padding to $spacer
4 - (by default) for classes that set the margin or padding to $spacer * 1.5
5 - (by default) for classes that set the margin or padding to $spacer * 3
auto - for classes that set the margin to auto
```

-Icons 사용
Bootstrap Icons 라이브러리에서 제공하는 아이콘을 활용하였습니다. 
Bootstap Icons 라이브러리는 Bootstrap 5 이상의 버전에서 기본적으로 제공됩니다.
공식 웹사이트에서 다운로드 및 CDN 링크를 제공하고 있으므로, 쉽게 사용이 가능합니다. 
출처: https://icons.getbootstrap.kr/

-아코디언 적용
출처: https://getbootstrap.kr/docs/5.1/components/accordion/
Bootstrap 공식 문서에서 accordion 기본 틀을 가져와서 사용하도록 하겠습니다.
아코디언을 클릭하면, 아코디언의 내용을 접기/펼치기가 가능합니다.
이를 이용하여 nft description에 아코디언을 적용하겠습니다.

-form, button 적용
출처: https://getbootstrap.com/docs/4.0/components/forms/
출처: https://getbootstrap.com/docs/4.0/components/buttons/

token 판매 페이지와 vote 페이지에 form을 만들 때 적용합니다.

각각의 input 태그들은 form-control 클래스를 갖게 합니다. 이 클래스는 부트스트랩에서 제공하는 폼 컨트롤 디자인을 적용하는 클래스입니다.

버튼 태그들은 btn 클래스와 각각의 버튼에 맞는 클래스를 가지고 있습니다.
btn 클래스는 부트스트랩에서 제공하는 버튼 디자인을 적용하는 클래스이며,
btn-primary, btn-secondary 클래스 등은 버튼의 색상을 나타내는 클래스입니다.



3. html에 메타바스크 연동해 보기
    출처 : https://docs.metamask.io/guide/sending-transactions.html#example

    지갑 연결 및 트랜잭션 전송의 경우 위의 메타마스크 공식 문서에서 기본 틀을 가져와서 사용하도록 하겠습니다.


    먼저 해당 예제에서는 바이낸스 체인의 테스트 네트워크를 사용하도록 하겠습니다.
    https://chainlist.org/chain/97
   

    html (ejs)
    ```
        <button class="enableEthereumButton btn">Enable Ethereum</button>
        <button class="sendEthButton btn">Send Eth</button>
    ```

    javascript
    ```
        const ethereumButton = document.querySelector('.enableEthereumButton');
        const sendEthButton = document.querySelector('.sendEthButton');

        let accounts = [];

        //Sending Ethereum to an address
        sendEthButton.addEventListener('click', () => {
        ethereum
            .request({
            method: 'eth_sendTransaction',
            params: [
                {
                from: accounts[0],
                to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
                value: '0x29a2241af62c0000',
                gasPrice: '0x09184e72a000',
                gas: '0x2710',
                },
            ],
            })
            .then((txHash) => console.log(txHash))
            .catch((error) => console.error(error));
        });

        ethereumButton.addEventListener('click', () => {
        getAccount();
        });

        async function getAccount() {
        accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        }
    ```
    트랜잭션을 보내려면 위의 코드 중 params 부분을 상황에 맞게 바꾸어서 진행하면 됩니다.
    javascripts의 crypto.js를 보면 data가 주가 되어 있는데 data를 만들어서 클릭시에 트랜잭션을 보내주면 되게 됩니다.

4. 기본 토큰 배포하기
기존에 쓰던 .env파일을 contracts 경로에 그대로 만든다.
   ```
    npx hardhat run scripts/deploy.ts --network bsc
   ```

배포 후에는 배포 된 컨트렉트와 상호작용이 가능한 2가지 요소를 사용한다.

그 첫번째는 컨트렉트 주소이며
```
erc20 contract is deployed to 0x39e813A5c0C98066C9c8Ebe1E6a2B23Bf2bE4357
```

두번째는 abi 파일이다.
각각 public/src/abi/constant.js와 public/src/abi/MyERC20.js 에 업데이트를 해준다.

5. 프로그램 구동시키기

npm run start를 실행한다. \n
그 후에는 127.0.0.1:3000/token 에 접속해서 ICO 페이지를 살펴본다.

5. NFT 배포하기

```
hyunkicho@Hyunkiui-MacBookPro contracts % npx hardhat run scripts/deployNft.ts --network bsc
deploying TestToken contract
erc721 contract is deployed to 0x77Bbcdaa4956DdD2C22140220467D36f3C145608
```