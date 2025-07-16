const fs = require('fs');
const Caver = require('caver-js');
const caver = new Caver('https://api.baobab.klaytn.net:8651/');

async function testFunction(){
    
    // 키스토어 읽기 readFileSync(keystore path,'utf-8');
    const keystoreA = fs.readFileSync('./keystore/keystoreA.json','utf-8');

    // keystoreInfo.json
    // {
    //     "password" : "password123"
    // }
    const keyInfoString = fs.readFileSync('./keystore/keystoreInfo.json','utf-8');
    const keyInfoJson = JSON.parse(keyInfoString);

    //키스토어 복호화 decrypt(keystore,password);
    const keyring = caver.wallet.keyring.decrypt(keystoreA,keyInfoJson.password);

    // //caver에 지갑 추가하기
    caver.wallet.add(keyring);

    const vt = new caver.transaction.valueTransfer({
        from: keyring.address,
        to: '0xbbf96db7c88222eee2543f2fc8458104b9444478',
        value: caver.utils.toPeb(1, 'KLAY'),
        gas: 25000,
    });

    /////////////////////////////////////////////////////
    // const vt = new caver.transaction.valueTransfer({
    //     from: keyring.address,
    //     to: 'address',
    //     value: caver.utils.toPeb(1, 'KLAY'),
    //     gas: 25000,
    // });
    //////////////////////////////////////////////////////



    // 트랜잭션 인증
    const signed = await caver.wallet.sign(keyring.address,vt);

    const receipt = await caver.rpc.klay.sendRawTransaction(signed);
    console.log(receipt);
}

testFunction();