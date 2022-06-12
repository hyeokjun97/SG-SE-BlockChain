# 서강대학교 소프트웨어 공학 8조 월렛

## 조원의 깃허브 아이디:

(조장)김창환:[hubaimaster](https://github.com/hubaimaster)  
김혁준:[hyeokjun97](https://github.com/hyeokjun97)  
권기윤:[Giyoooon](https://github.com/Giyoooon)  
차상원:[LaDMasC](https://github.com/LaDMasC)  
이해욱:[woooo-k](https://github.com/woooo-k)  
이태화:[20181678](https://github.com/20181678)  
이인재:[Leeinjae189](https://github.com/Leeinjae189)

<br/>

# 사용 방법

깃으로 파일을 내려받고, 네트워크파일은 이메일로 전송했습니다.
네트워크 파일이 작동이 안되신다면 아래 구글드라이브 링크로 접속 부탁드립니다.

노드는 총 7개를 사용하였습니다.  
네트워크 파일과 소스코드를 받으시고, 
```bash
npm install
```   
명령어를 입력하시고,
```bash
npm run
```

을 입력하시면 됩니다.  
<br/>


# 네트워크 파일을 켜기 위한 명령어

**Chian ID:** 2022  
**init network:**  
```bash
besu operator generate-blockchain-config --config-file=genesis.json --to=networkFiles --private-key-file-name=key
```
<br/>

## **Node1(INIT):**   
**Address:**  
```bash
0x5FFA863a230A80642e4a31f535606E7a67E4C5fb 
``` 
**PK:** 
```bash
d8ca706459c90dd7400792303bffc76485343d1a34497b8bddf5628387db1500  
```
**URL:**
```bash
besu --data-path=data --genesis-file=../genesis.json --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT --host-allowlist="\*" --rpc-http-cors-origins="all"  
```
```bash
enode://9006c5bf3a7c6dbc930c50f0fc1ca8b6bb5f19664bbd33771337bd96bea748545833ce97f5a99eaef1560e2194257c54882f5a4584395e7e51d4788b078b5783@127.0.0.1:30303  
```
<br/>

## **Node2:**  
**Address:** 
```bash
0x051F9e64101B696b4FB13aB4506A5Ce7e9D91866
```
**PK:** 
```bash
4a7c1fce0cf65c660a26f79f269b2eb6bc658fbbc9fdb535aba316bfcc4bc1dc
```
**URL:**
```bash
besu --data-path=data --genesis-file=../genesis.json --bootnodes=enode://9006c5bf3a7c6dbc930c50f0fc1ca8b6bb5f19664bbd33771337bd96bea748545833ce97f5a99eaef1560e2194257c54882f5a4584395e7e51d4788b078b5783@127.0.0.1:30303 --p2p-port=30304 --rpc-ws-enabled --rpc-ws-api=ETH,NET,IBFT --host-allowlist="\*" --rpc-http-cors-origins="all" --rpc-ws-port=8546
```
<br/>

## **Node3:**
**Address:** 
```bash
0xE0a46A595f250D6bBc1596764c845C394b0b2555
```
**PK:** 
```bash
99cfc00099cb25eff411f6433e6cab2c2ce0a3a025617258bb3b53ee905d6877
```
**URL:**
```bash
besu --data-path=data --genesis-file=../genesis.json --bootnodes=enode://9006c5bf3a7c6dbc930c50f0fc1ca8b6bb5f19664bbd33771337bd96bea748545833ce97f5a99eaef1560e2194257c54882f5a4584395e7e51d4788b078b5783@127.0.0.1:30303 --p2p-port=30305 --rpc-ws-enabled --rpc-ws-api=ETH,NET,IBFT --host-allowlist="\*" --rpc-http-cors-origins="all" --rpc-ws-port=8547
```
<br/>

## **Node4:**
**Address:** 
```bash
0x6e88E1FC49f7e1cB3D4885143E3f47ACFd6687a2
```
**PK:**  
```bash
0504e5e77627afa6e5cd1c68ae7a6331e0fe6bb0c710881f7581f62af962103e
```
**URL:**
```bash
besu --data-path=data --genesis-file=../genesis.json --bootnodes=enode://9006c5bf3a7c6dbc930c50f0fc1ca8b6bb5f19664bbd33771337bd96bea748545833ce97f5a99eaef1560e2194257c54882f5a4584395e7e51d4788b078b5783@127.0.0.1:30303 --p2p-port=30306 --rpc-ws-enabled --rpc-ws-api=ETH,NET,IBFT --host-allowlist="\*" --rpc-http-cors-origins="all" --rpc-ws-port=8548
```
<br/>

## **Node5:**
**Address:**  
```bash
0xC1460c29D4718C3112a1FAf13DaD1B1138651Ef2
```
**PK:**  
```bash
116e8133467b5e999bf6e86ccf38618bf055f78e0a2daf7faeef84f0fef0bac8
```
**URL:**  
```bash
besu --data-path=data --genesis-file=../genesis.json --bootnodes=enode://9006c5bf3a7c6dbc930c50f0fc1ca8b6bb5f19664bbd33771337bd96bea748545833ce97f5a99eaef1560e2194257c54882f5a4584395e7e51d4788b078b5783@127.0.0.1:30303 --p2p-port=30307 --rpc-ws-enabled --rpc-ws-api=ETH,NET,IBFT --host-allowlist="\*" --rpc-http-cors-origins="all" --rpc-ws-port=8549
```
<br/>

## **Node6:**
**Address:** 
```bash
0x79ca958f94D16BaDEbfe2C3DE3c51eCbB2C5dB94
```
**PK:**  
```bash
43c140429db3b290ef058aa9bffa29a8f0f0ef92292a2dbd9bac1565f728a264
```
**URL:**  
```bash
besu --data-path=data --genesis-file=../genesis.json --bootnodes=enode://9006c5bf3a7c6dbc930c50f0fc1ca8b6bb5f19664bbd33771337bd96bea748545833ce97f5a99eaef1560e2194257c54882f5a4584395e7e51d4788b078b5783@127.0.0.1:30303 --p2p-port=30308 --rpc-ws-enabled --rpc-ws-api=ETH,NET,IBFT --host-allowlist="\*" --rpc-http-cors-origins="all" --rpc-ws-port=8550
```
<br/>

## **Node7:**  
**Address:** 
```bash
0x02841B235d665E100151b99cDBa31C0E47cA8d60
```
**PK:**  
```bash
ec6e3f39576679226de89624ff58154dcfa69dc0841042c0c8d3cff83432ffc8
```
**URL:**
```bash
besu --data-path=data --genesis-file=../genesis.json --bootnodes=enode://9006c5bf3a7c6dbc930c50f0fc1ca8b6bb5f19664bbd33771337bd96bea748545833ce97f5a99eaef1560e2194257c54882f5a4584395e7e51d4788b078b5783@127.0.0.1:30303 --p2p-port=30309 --rpc-ws-enabled --rpc-ws-api=ETH,NET,IBFT --host-allowlist="\*" --rpc-http-cors-origins="all" --rpc-ws-port=8551  
```

#
