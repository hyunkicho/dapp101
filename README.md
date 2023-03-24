# dapp101
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


1. 시퀀스 다이어그램 작성해보기 - DAO

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

