import api from './api';

export function LoadData() {
    return new Promise((resolve, reject) => {
        api.get('/data')
            .then((response, request) => {
                resolve([false, response.data]);
            })
            .catch((err) => {
                if (err.response) {
                    if (err.response.data.ValidationErrors) {
                        resolve([
                            true,
                            err.response.data.ValidationErrors[0].msg,
                        ]);
                    } else {
                        resolve([true, err.response.statusText]);
                    }
                } else if (err.request) {
                    resolve([true, 'O servidor está offline']);
                } else {
                    resolve([true, 'Erro inesperado']);
                }
            });
    });
}

export function PostData(values) {
    return new Promise((resolve, reject) => {
        api.post('/data', values)
            .then((response, request) => {
                resolve([false, response.data]);
            })
            .catch((err) => {
                if (err.response) {
                    if (err.response.data.ValidationErrors) {
                        console.log(err.response.data.ValidationErrors);
                        resolve([
                            true,
                            err.response.data.ValidationErrors[0].msg,
                        ]);
                    } else {
                        resolve([true, err.response.statusText]);
                    }
                } else if (err.request) {
                    resolve([true, 'O servidor está offline']);
                } else {
                    resolve([true, 'Erro inesperado']);
                }
            });
    });
}
