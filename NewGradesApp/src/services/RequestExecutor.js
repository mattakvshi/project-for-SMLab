/**
 * Реализация HTTP-клиента (вместо axios).
 * методы: get, post, put, delete
 * @this baseUrl - базовый url - api/(rest rpc cursor)/schema/package/
 * @this loadingMask - флаг, вкл/выкл маску
 */
import { useLoadingStore } from '../store/modules/loading';

const INIT = {
	headers: {
		'Content-Type': 'application/json;charset=utf-8',
	},
};

class RequestExecutor {
	//TODO: Cancel request
	constructor(toastInstance) {
		this.baseUrl = '';
		this.loadingMask = true; //отключать, если не требуется глобальная маска
		console.info('Request Executor Init!');
	}

	/**
	 * GET
	 *
	 * @param {string} url Endpoint.
	 * @param {number} code Код, если есть.
	 * @return {Promise}
	 */
	get(url, code) {
		return this.execute(code ? url + '/' + code : url, false, {
			...INIT,
			method: 'GET',
		});
	}

	/**
	 * POST
	 *
	 * @param {string} url Endpoint.
	 * @param {object} data Объект с данными. Будет помещён в тело запроса.
	 * @return {Promise}
	 */
	post(url, data) {
		return this.execute(url, false, { ...INIT, method: 'POST' }, data);
	}

	/**
	 * PUT
	 *
	 * @param {string} url Endpoint.
	 * @param {number} code Код.
	 * @param {object} data Объект с данными. Будет помещён в тело запроса.
	 * @return {Promise}
	 */
	put(url, code, data) {
		return this.execute(
			url + '/' + code,
			false,
			{ ...INIT, method: 'PUT' },
			data
		);
	}

	/**
	 * DELETE
	 *
	 * @param {string} url Endpoint.
	 * @param {number} code Код.
	 * @return {Promise}
	 */
	delete(url, code) {
		return this.execute(url + '/' + code, false, { ...INIT, method: 'DELETE' });
	}

	/**
	 * EXECUTE
	 *
	 * @param {string} url Endpoint.
	 * @param {boolean} exact не подставлять baseUrl
	 * @param {object} init параметры запроса
	 * @param {object} data тело запроса
	 * @return {Promise}
	 */

	async execute(url, exact, init, data) {
		const loadingStore = useLoadingStore();
		if (this.loadingMask) loadingStore.setIsLoading(true);

		try {
			//console.log( JSON.stringify(data))
			if (data) init = { ...init, body: JSON.stringify(data) };
			//console.log(init)

			const location = exact ? url : this.baseUrl + url;
			const response = await fetch(location, init);
			//if(!response.ok) throw new Error("Network error!");

			return await response.json();
		} catch (error) {
			console.error(error);
			throw new Error(error);
			//Вынес это В onMounted() таблицы грейдов, так как маска снималась раньше, чем монтировался компонент
			// } finally {
			// 	setTimeout(() => {
			// 		loadingStore.setIsLoading(false);
			// 	}, 1000);
		}
	}
}

export default new RequestExecutor();
